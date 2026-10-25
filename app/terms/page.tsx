import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service — VoiceShape',
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="pb-8 border-b border-gray-200 last:border-0">
      <h2 className="text-lg font-bold text-gray-900 mb-4">{title}</h2>
      <div className="space-y-3 text-gray-600 leading-relaxed text-sm">{children}</div>
    </section>
  )
}

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-black text-gray-900 mb-3">Terms of Service</h1>
      <p className="text-sm text-gray-600 mb-12">Last updated: October 2026</p>

      <div className="space-y-8">

        <Section title="1. Scope and Provider">
          <p>
            1.1 These Terms of Service (&quot;ToS&quot;) apply to the use of the VoiceShape platform, consisting
            of the VoiceShape web application, future mobile applications and this website (together the
            &quot;Platform&quot;), and all associated services.
          </p>
          <p>1.2 Provider and contractual partner for all services related to the Platform is:</p>
          <div className="bg-gray-50 rounded-xl px-5 py-4 space-y-1">
            <p><strong>Platform:</strong> VoiceShape</p>
            <p><strong>E-Mail:</strong> <a href="mailto:hi@voiceshape.app" className="text-brand-blue-ink underline">hi@voiceshape.app</a></p>
          </div>
          <p>1.3 The Platform has two kinds of users:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>
              <strong>Coaches:</strong> voice coaches, speech-language therapists, voice and singing teachers,
              presentation coaches and similar professionals who create practice content and invite their clients.
            </li>
            <li>
              <strong>Clients</strong>{' '}(shown in the app as &quot;students&quot;): people who join the Platform
              through an invitation from their coach and practise the content their coach assigns.
            </li>
          </ul>
          <p>
            1.4 Deviating or supplementary terms and conditions of users are not recognized unless the
            provider expressly agrees to their validity in writing.
          </p>
          <p>
            1.5 These ToS apply to consumers as well as businesses. Coaches generally use the Platform in the
            course of their professional activity. Where provisions are specific to one group, this is indicated.
          </p>
        </Section>

        <Section title="2. Service Description">
          <p>
            2.1 VoiceShape is an educational voice practice platform. Coaches can create exercise blocks
            (optionally with the help of AI), assemble them into lessons and day-by-day practice plans, assign
            them to their clients and see their clients&apos; practice completion, measurements and check-ins.
            Clients practise with real-time feedback on pitch, resonance and vocal weight.
          </p>
          <p>2.2 In addition to the core features, the Platform may provide:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Product updates by email (if the user has agreed to receive them)</li>
            <li>Support via email (hi@voiceshape.app)</li>
            <li>Beta features and future extensions</li>
          </ul>
          <p>
            2.3 VoiceShape is currently provided in a pilot phase, free of charge. Paid plans for coaches may be
            introduced in the future (see section 5).
          </p>
          <p>
            2.4 There is no claim to specific functionality or constant availability. The provider reserves
            the right to change or discontinue content, features and designs where reasonable or required
            by law.
          </p>
          <p>
            2.5 <strong>Educational purpose:</strong> VoiceShape is an educational tool. It does not provide
            medical diagnosis, treatment or therapy and is not a medical device within the meaning of
            EU Regulation 2017/745 (MDR). It does not replace professional care.
          </p>
          <p>
            2.6 <strong>AI-assisted features:</strong> Exercise drafts and practice plans generated with the help
            of AI may contain errors or be unsuitable for a particular client. They are suggestions only. Coaches
            must review and, where necessary, adjust them before assigning them. Clients&apos; names, goals and
            other personal details are not sent to the AI provider.
          </p>
        </Section>

        <Section title="3. Registration and Contract Conclusion">
          <p>
            3.1 Coaches register by providing their email address and agreeing to these ToS. Clients join
            through a personal, single-use invite code issued by their coach and agree to these ToS when creating
            their account. By completing registration, a usage contract is concluded between the provider and
            the user.
          </p>
          <p>
            3.2 Use of the Platform requires that you are at least <strong>13 years old.</strong> Clients under 16
            may use the Platform only with the involvement of a parent or guardian, in accordance with the GDPR
            requirements applicable in their country.
          </p>
          <p>
            3.3 The provider reserves the right to reject registrations without giving reasons, especially in
            case of violations of these ToS or abusive use.
          </p>
          <p>
            3.4 <strong>Coaching relationship:</strong> The coaching or therapy relationship exists solely between
            the coach and the client. The provider is not a party to it. Coaches remain solely responsible for
            the content they assign, for their professional judgement and for informing their clients that they
            use VoiceShape and can see their clients&apos; practice data.
          </p>
        </Section>

        <Section title="4. Use of the Platform and Usage Rights">
          <p>
            4.1 The provider grants each registered user a simple, non-transferable and revocable right to use
            the Platform: coaches for their own professional practice with their own clients, clients for their
            own personal practice. Further use (including reproduction, resale or reverse engineering) is not
            permitted unless expressly agreed or legally required.
          </p>
          <p>
            4.2 Users are responsible for all content they submit to the Platform. Coaches are responsible for
            the exercises, texts and documents they create or upload and must hold the necessary rights to them.
            Uploading voice recordings of third parties is not permitted.
          </p>
          <p>
            4.3 It is forbidden to upload, distribute or make publicly accessible any content that is illegal,
            hateful, offensive or otherwise violates applicable law, third-party rights or acceptable standards
            of conduct.
          </p>
        </Section>

        <Section title="5. Prices, Payment Terms and Subscription">
          <p>
            5.1 <strong>Current phase:</strong> Use of the Platform is free of charge during the pilot phase.
            Clients invited by a coach are not charged.
          </p>
          <p>
            5.2 <strong>Future plans:</strong> The provider may introduce paid plans for coaches. Details on price,
            scope and payment terms will be announced in advance and added to these ToS or the website.
          </p>
          <p>
            5.3 For paid offers, the provider will use established payment service providers (such as Stripe).
            Payment processing will be carried out in accordance with their terms of use.
          </p>
          <p>
            5.4 <strong>Right of withdrawal:</strong> Consumers have a 14-day right of withdrawal after payment
            without giving reasons. A message to{' '}
            <a href="mailto:hi@voiceshape.app" className="text-brand-blue-ink underline">hi@voiceshape.app</a>{' '}
            is sufficient. This right does not apply to coaches acting in the course of their business.
          </p>
        </Section>

        <Section title="6. User Obligations">
          <p>
            6.1 Users must provide correct and complete information during registration and keep it up to date.
          </p>
          <p>
            6.2 Users must keep their access credentials and invite codes secure and must not share them with
            third parties.
          </p>
          <p>
            6.3 Coaches only enter the client information needed to use the Platform (for example a first name
            or alias) and do not enter health information or other sensitive data unless it is necessary.
          </p>
          <p>
            6.4 Users agree not to violate third-party rights or take harmful actions (e.g. distributing
            malicious software).
          </p>
          <p>
            6.5 Users acknowledge that VoiceShape is an educational voice practice tool and does not provide
            medical advice, diagnosis or treatment. Clients stop an exercise if they feel pain or strain and
            talk to their coach.
          </p>
        </Section>

        <Section title="7. Liability and Disclaimer">
          <p>
            7.1 The provider is fully liable for intent and gross negligence, as well as for injury to
            life, body, or health. For slight negligent violation of a material contractual obligation,
            liability is limited to the foreseeable, typical damage at the time of contract conclusion.
          </p>
          <p>
            7.2 The provider is not liable for damages resulting from improper, unauthorized, or
            inadmissible use of the Platform.
          </p>
          <p>
            7.3 VoiceShape does not guarantee specific voice training results. Individual outcomes depend
            on practice consistency, technique, individual physiology and the guidance of the coach.
          </p>
          <p>
            7.4 The provider is not liable for the content coaches assign or for AI-assisted suggestions that a
            coach has reviewed and assigned, except in the cases described in section 7.1.
          </p>
        </Section>

        <Section title="8. Duration and Termination">
          <p>
            8.1 The free usage contract runs for an indefinite period and can be terminated by either
            party at any time without notice, as long as no paid subscription is active.
          </p>
          <p>
            8.2 Once a paid subscription has been introduced and activated, the termination provisions
            described in section 5 apply.
          </p>
          <p>
            8.3 If a coach&apos;s account ends, that coach&apos;s clients lose access to the practice content
            assigned by that coach.
          </p>
          <p>
            8.4 The right to extraordinary termination for good cause remains unaffected. Good cause
            includes serious violations of these ToS or illegal actions by the user.
          </p>
          <p>
            8.5 Termination may be declared by email to{' '}
            <a href="mailto:hi@voiceshape.app" className="text-brand-blue-ink underline">hi@voiceshape.app</a>.
          </p>
        </Section>

        <Section title="9. Data Protection">
          <p>
            For information on how personal data is handled, please refer to our{' '}
            <Link href="/privacy" className="text-brand-blue-ink underline">Privacy Policy</Link>, which is available
            on the website and within the Platform.
          </p>
        </Section>

        <Section title="10. Right of Withdrawal for Consumers">
          <p>
            10.1 Consumers within the meaning of § 13 BGB have a 14-day right of withdrawal. For digital
            content not delivered on a physical medium, the right of withdrawal may be restricted once
            the user has expressly agreed that execution of the contract begins before the withdrawal
            period expires. VoiceShape nevertheless grants a 14-day right of withdrawal from the payment
            date (see section 5.4).
          </p>
          <p>
            10.2 Details are set out in the separate withdrawal instruction provided to the user upon
            conclusion of contract.
          </p>
        </Section>

        <Section title="11. Final Provisions">
          <p>
            11.1 <strong>Applicable law:</strong> The law of the Federal Republic of Germany applies,
            excluding the UN Sales Law (CISG). For consumers, this choice of law does not override
            mandatory protections of the country where the consumer resides.
          </p>
          <p>
            11.2 <strong>Jurisdiction:</strong> For merchants or legal entities, the place of jurisdiction
            is the provider&apos;s registered seat. Statutory consumer rules apply to private users.
          </p>
          <p>
            11.3 <strong>Amendments:</strong> The provider may amend these ToS for compelling reasons
            (e.g. changes in law or Platform features) with reasonable notice. If a user does not object
            within the stated period, the changes are deemed accepted.
          </p>
          <p>
            11.4 <strong>Severability:</strong> Should any provision of these ToS be invalid, the
            remaining provisions stay in effect. The invalid provision shall be replaced by the closest
            valid equivalent.
          </p>
        </Section>

      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/" className="text-sm text-brand-blue-ink hover:underline">← Back to VoiceShape</Link>
      </div>
    </main>
  )
}
