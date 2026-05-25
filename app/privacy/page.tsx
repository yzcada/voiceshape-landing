export const metadata = {
  title: 'Privacy Policy — VoiceShape',
}

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-400 mb-10">Last updated: May 2026</p>

      <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Data Controller</h2>
          <p>
            VoiceShape is operated from Germany (European Union). As data controller within the meaning
            of the General Data Protection Regulation (GDPR), we are responsible for the personal data
            you provide to us. Contact: <a href="mailto:hi@voiceshape.app" className="text-sky-600 underline">hi@voiceshape.app</a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">2. What Data We Collect</h2>
          <p>When you join our waitlist, we collect:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Your email address</li>
            <li>Timestamp of submission</li>
            <li>A record of your GDPR consent</li>
          </ul>
          <p className="mt-3">We do not collect any additional personal data through the waitlist form.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Purpose and Legal Basis</h2>
          <p>
            We process your email address for the sole purpose of notifying you when VoiceShape launches
            and sending relevant updates about the product.
          </p>
          <p className="mt-2">
            The legal basis for this processing is your freely given, specific, and informed consent
            pursuant to <strong>Art. 6(1)(a) GDPR</strong>. You may withdraw your consent at any time
            by sending an email to <a href="mailto:hi@voiceshape.app" className="text-sky-600 underline">hi@voiceshape.app</a>.
            Withdrawal does not affect the lawfulness of processing prior to withdrawal.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Data Retention</h2>
          <p>
            We will retain your data until the VoiceShape app launches and for up to 6 months thereafter,
            or until you withdraw your consent — whichever comes first.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Data Storage and Security</h2>
          <p>
            Your data is stored on servers located within the European Economic Area (EEA). We implement
            appropriate technical and organisational measures to protect your personal data against
            unauthorised access, loss, or disclosure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Your Rights Under GDPR</h2>
          <p>You have the following rights regarding your personal data:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>Right of access</strong> (Art. 15 GDPR) — request a copy of the data we hold about you</li>
            <li><strong>Right to rectification</strong> (Art. 16 GDPR) — request correction of inaccurate data</li>
            <li><strong>Right to erasure</strong> (Art. 17 GDPR) — request deletion of your data ("right to be forgotten")</li>
            <li><strong>Right to restriction of processing</strong> (Art. 18 GDPR)</li>
            <li><strong>Right to data portability</strong> (Art. 20 GDPR) — receive your data in a structured, machine-readable format</li>
            <li><strong>Right to object</strong> (Art. 21 GDPR)</li>
            <li><strong>Right to withdraw consent</strong> at any time without affecting prior lawful processing</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, please contact us at{' '}
            <a href="mailto:hi@voiceshape.app" className="text-sky-600 underline">hi@voiceshape.app</a>.
            We will respond within 30 days.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Right to Lodge a Complaint</h2>
          <p>
            You have the right to lodge a complaint with a supervisory authority. In Germany, the
            competent authority is the{' '}
            <strong>Federal Commissioner for Data Protection and Freedom of Information (BfDI)</strong>.
            You may also contact the supervisory authority in your EU member state of residence.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">8. No Sharing with Third Parties</h2>
          <p>
            We do not sell, rent, or share your personal data with third parties for marketing purposes.
            We will only disclose your data if required by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify waitlist subscribers of
            material changes by email. The date at the top of this page reflects the latest revision.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Contact</h2>
          <p>
            For any privacy-related questions, please contact us at{' '}
            <a href="mailto:hi@voiceshape.app" className="text-sky-600 underline">hi@voiceshape.app</a>.
          </p>
        </section>

      </div>

      <div className="mt-12 pt-8 border-t border-gray-100">
        <a href="/" className="text-sm text-sky-600 hover:underline">← Back to VoiceShape</a>
      </div>
    </main>
  )
}
