import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const ROLES = ['therapist', 'coach', 'student', 'other'] as const
type Role = (typeof ROLES)[number]
const ROLE_LABEL: Record<Role, string> = {
  therapist: 'Speech-language therapist',
  coach: 'Voice or singing coach',
  student: 'Student (speech therapy / voice)',
  other: 'Other',
}

// Heads-up email to the team for every new pilot sign-up (Brevo, same provider as the app).
// Best effort: a failed email never fails the sign-up; the row is in Supabase either way.
async function notifyTeam(email: string, role: Role | null) {
  const apiKey = process.env.BREVO_API_KEY
  if (!apiKey) {
    console.warn('BREVO_API_KEY not set; no pilot sign-up notification sent for', email)
    return
  }
  try {
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': apiKey, 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({
        sender: { name: 'VoiceShape website', email: process.env.EMAIL_FROM || 'no-reply@voiceshape.app' },
        to: [{ email: process.env.NOTIFY_TO || 'hi@voiceshape.app' }],
        replyTo: { email },
        subject: `[VoiceShape] New pilot sign-up: ${email}`,
        textContent: [
          'Someone joined the free pilot on voiceshape.app.',
          '',
          `Email: ${email}`,
          `Role: ${role ? ROLE_LABEL[role] : '-'}`,
          '',
          'Reply to this email to answer them directly.',
        ].join('\n'),
      }),
      signal: AbortSignal.timeout(8000),
    })
    if (!res.ok) console.error('Brevo refused the sign-up notification:', res.status, await res.text())
  } catch (err) {
    console.error('Could not send the sign-up notification:', err)
  }
}

export async function POST(request: NextRequest) {
  let body: { email?: string; gdpr_consent?: boolean; role?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { email, gdpr_consent } = body
  const role = ROLES.includes(body.role as Role) ? (body.role as Role) : null

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
  }
  if (!gdpr_consent) {
    return NextResponse.json({ error: 'GDPR consent required' }, { status: 400 })
  }

  const clean = email.toLowerCase().trim()
  let { error } = await supabase.from('waitlist').insert({ email: clean, gdpr_consent: true, role })
  // Until the `role` column exists in Supabase, store the sign-up without it (the email still has it).
  if (error && /role/i.test(error.message ?? '') && error.code !== '23505') {
    ;({ error } = await supabase.from('waitlist').insert({ email: clean, gdpr_consent: true }))
  }

  if (error) {
    // Duplicate email → unique constraint violation
    if (error.code === '23505') {
      return NextResponse.json({ message: 'Already subscribed' })
    }
    console.error('Supabase error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }

  await notifyTeam(clean, role)
  return NextResponse.json({ message: 'Subscribed' })
}
