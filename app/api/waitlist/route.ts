import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(request: NextRequest) {
  let body: { email?: string; gdpr_consent?: boolean }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { email, gdpr_consent } = body

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
  }
  if (!gdpr_consent) {
    return NextResponse.json({ error: 'GDPR consent required' }, { status: 400 })
  }

  const { error } = await supabase
    .from('waitlist')
    .insert({ email: email.toLowerCase().trim(), gdpr_consent: true })

  if (error) {
    // Duplicate email → unique constraint violation
    if (error.code === '23505') {
      return NextResponse.json({ message: 'Already subscribed' })
    }
    console.error('Supabase error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }

  return NextResponse.json({ message: 'Subscribed' })
}
