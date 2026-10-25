import Image from 'next/image'

type Variant = 'mark' | 'icon'

/** Logo + "VoiceShape" wordmark. `icon` = coloured app icon with the wave cut out (theme colour shows through). */
export default function BrandLogo({ variant = 'mark', size = 34, textSize = 23 }: { variant?: Variant; size?: number; textSize?: number }) {
  return (
    <span className="flex items-center gap-2.5">
      {variant === 'icon' ? (
        <Image src="/brand-icon-cutout.png" alt="" width={size} height={size} />
      ) : (
        <Image src="/brand-mark-tight.png" alt="" width={Math.round(size * 1.16)} height={size} />
      )}
      <span
        className="brand-gradient-text antialiased"
        style={{ fontSize: textSize, fontWeight: 760, letterSpacing: '-0.01em', lineHeight: 1 }}
      >
        VoiceShape
      </span>
    </span>
  )
}
