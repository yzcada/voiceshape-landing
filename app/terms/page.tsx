export const metadata = {
  title: 'Terms of Service — VoiceShape',
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="pb-8 border-b border-gray-100 last:border-0">
      <h2 className="text-lg font-bold text-gray-900 mb-4">{title}</h2>
      <div className="space-y-3 text-gray-600 leading-relaxed text-sm">{children}</div>
    </section>
  )
}

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-black text-gray-900 mb-3">Terms of Service</h1>
      <p className="text-sm text-gray-400 mb-12">Last updated: May 2026</p>

      <div className="space-y-8">

        <Section title="1. Scope and Provider">
          <p>
            1.1 These Terms of Service (&quot;ToS&quot;) apply to the use of the mobile application &quot;VoiceShape&quot;
            (hereinafter &quot;App&quot;) and all associated services, particularly AI-powered voice training
            functionalities, real-time analysis tools, and progress tracking. The App is provided worldwide.
          </p>
          <p>1.2 Provider and contractual partner for all services related to the App is:</p>
          <div className="bg-gray-50 rounded-xl px-5 py-4 space-y-1">
            <p><strong>App:</strong> VoiceShape</p>
            <p><strong>E-Mail:</strong> <a href="mailto:hi@voiceshape.app" className="text-sky-600 underline">hi@voiceshape.app</a></p>
          </div>
          <p>
            1.3 Deviating or supplementary terms and conditions of the user are not recognized unless the
            provider expressly agrees to their validity in writing.
          </p>
          <p>
            1.4 These ToS apply to consumers as well as companies. Where provisions are specific to one group,
            this will be indicated.
          </p>
        </Section>

        <Section title="2. Service Description">
          <p>
            2.1 VoiceShape is an educational voice training app. Users can practice voice techniques with
            real-time feedback on pitch, resonance, and vocal weight, follow personalized daily lesson
            paths, and track their progress over time.
          </p>
          <p>2.2 In addition to the core voice training features, the App may provide:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Newsletter delivery (if subscribed by the user)</li>
            <li>Support via email (hi@voiceshape.app)</li>
            <li>Beta features and future extensions</li>
          </ul>
          <p>
            2.3 VoiceShape is initially provided in a waitlist and early-access phase, currently free of
            charge. A paid subscription model will be introduced in the future (see section 5).
          </p>
          <p>
            2.4 There is no claim to specific functionality or constant availability. The provider reserves
            the right to change or discontinue content, features, and designs where reasonable or required
            by law.
          </p>
          <p>
            2.5 <strong>Educational purpose:</strong> VoiceShape is an educational tool. It does not provide
            medical diagnosis, treatment, or therapy and is not a medical device within the meaning of
            EU Regulation 2017/745 (MDR).
          </p>
        </Section>

        <Section title="3. Registration and Contract Conclusion">
          <p>
            3.1 To use the App&apos;s services, users must register by providing their email address and
            agreeing to these ToS. By completing registration, a usage contract is concluded between the
            provider and the user.
          </p>
          <p>
            3.2 Use of the App requires that you are at least <strong>13 years old.</strong> Users under 16
            should use the App only with the involvement of a parent or guardian, in accordance with GDPR
            requirements applicable in their country.
          </p>
          <p>
            3.3 The provider reserves the right to reject registrations without giving reasons, especially
            in case of violations of these ToS or abusive use.
          </p>
        </Section>

        <Section title="4. Use of the App and Usage Rights">
          <p>
            4.1 The provider grants each registered user a simple, non-transferable and revocable right to
            use the App and its content for their own personal use. Further use (including reproduction,
            commercial use, or reverse engineering) is not permitted unless expressly agreed or legally required.
          </p>
          <p>
            4.2 Users are responsible for all content they submit through the App (e.g. voice samples
            recorded during exercises). Uploading voice recordings of third parties is not permitted.
          </p>
          <p>
            4.3 It is forbidden to upload, distribute, or make publicly accessible any content that is
            illegal, hateful, offensive, or otherwise violates applicable law, third-party rights, or
            acceptable standards of conduct.
          </p>
        </Section>

        <Section title="5. Prices, Payment Terms and Subscription">
          <p>
            5.1 <strong>Current phase:</strong> Use of the App is currently free during the early-access
            and beta phase.
          </p>
          <p>
            5.2 <strong>Future subscription model:</strong> The provider plans to introduce a monthly
            subscription. Details on price, scope, and payment terms will be announced in due course and
            supplemented in these ToS or on the website.
          </p>
          <p>
            5.3 For paid offers, the provider will use established payment service providers (such as
            Stripe). Payment processing will be carried out in accordance with their terms of use.
          </p>
          <p>
            5.4 <strong>Right of withdrawal:</strong> Consumers have a 14-day right of withdrawal after
            payment without giving reasons. A message to{' '}
            <a href="mailto:hi@voiceshape.app" className="text-sky-600 underline">hi@voiceshape.app</a>{' '}
            is sufficient.
          </p>
        </Section>

        <Section title="6. User Obligations">
          <p>
            6.1 Users must provide correct and complete information during registration and keep it up
            to date.
          </p>
          <p>
            6.2 Users must keep their access credentials secure and must not share them with third parties.
          </p>
          <p>
            6.3 Users agree not to violate third-party rights or take harmful actions (e.g. distributing
            malicious software).
          </p>
          <p>
            6.4 Users acknowledge that VoiceShape is an educational voice training tool and does not
            provide medical advice, diagnosis, or treatment.
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
            inadmissible use of the App.
          </p>
          <p>
            7.3 VoiceShape does not guarantee specific voice training results. Individual outcomes depend
            on practice consistency, technique, and individual physiology.
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
            8.3 The right to extraordinary termination for good cause remains unaffected. Good cause
            includes serious violations of these ToS or illegal actions by the user.
          </p>
          <p>
            8.4 Termination may be declared by email to{' '}
            <a href="mailto:hi@voiceshape.app" className="text-sky-600 underline">hi@voiceshape.app</a>.
          </p>
        </Section>

        <Section title="9. Data Protection">
          <p>
            For information on how personal data is handled, please refer to our{' '}
            <a href="/privacy" className="text-sky-600 underline">Privacy Policy</a>, which is available
            on the website and within the App.
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
            (e.g. changes in law or App features) with reasonable notice. If a user does not object
            within the stated period, the changes are deemed accepted.
          </p>
          <p>
            11.4 <strong>Severability:</strong> Should any provision of these ToS be invalid, the
            remaining provisions stay in effect. The invalid provision shall be replaced by the closest
            valid equivalent.
          </p>
        </Section>

      </div>

      <div className="mt-12 pt-8 border-t border-gray-100">
        <a href="/" className="text-sm text-sky-600 hover:underline">← Back to VoiceShape</a>
      </div>
    </main>
  )
}
