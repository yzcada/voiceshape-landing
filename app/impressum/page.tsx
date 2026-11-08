import Link from 'next/link'

export const metadata = {
  title: 'Impressum — VoiceShape',
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-900 mb-2">{title}</h2>
      <div className="space-y-1 text-gray-700 leading-relaxed">{children}</div>
    </section>
  )
}

export default function ImpressumPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Impressum</h1>
      <p className="text-sm text-gray-600 mb-10">Legal notice</p>

      <div className="space-y-8">
        <Block title="Angaben gemäß § 5 DDG">
          <p>Ada Yazici</p>
          <p>VoiceShape</p>
          <p>Krugenofen 15</p>
          <p>52066 Aachen</p>
          <p>Deutschland</p>
        </Block>

        <Block title="Kontakt">
          <p>
            E-Mail:{' '}
            <a href="mailto:hi@voiceshape.app" className="text-brand-blue-ink underline">hi@voiceshape.app</a>
          </p>
        </Block>

        <Block title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
          <p>Ada Yazici, Krugenofen 15, 52066 Aachen</p>
        </Block>

        <Block title="Verbraucherstreitbeilegung">
          <p>
            Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </Block>

        <Block title="English">
          <p>
            VoiceShape is run by Ada Yazici, Krugenofen 15, 52066 Aachen, Germany. Contact:{' '}
            <a href="mailto:hi@voiceshape.app" className="text-brand-blue-ink underline">hi@voiceshape.app</a>.
            See also our <Link href="/privacy" className="text-brand-blue-ink underline">Privacy Policy</Link> and{' '}
            <Link href="/terms" className="text-brand-blue-ink underline">Terms of Service</Link>.
          </p>
        </Block>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/" className="text-sm text-brand-blue-ink hover:underline">← Back to VoiceShape</Link>
      </div>
    </main>
  )
}
