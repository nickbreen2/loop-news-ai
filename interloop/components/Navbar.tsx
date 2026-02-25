import Image from 'next/image'

export default function Navbar() {
  return (
    <nav style={{ position: 'absolute', top: 0, left: 0, zIndex: 50, padding: '24px 32px' }}>
      <Image
        src="/interloop-full-logo.svg"
        alt="InterLoop"
        height={36}
        width={160}
        style={{ height: 36, width: 'auto' }}
        priority
      />
    </nav>
  )
}
