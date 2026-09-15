import Link from 'next/link'
import { LogoutButton } from '@/components/admin/LogoutButton'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav>
        <h1>Admin Layout</h1>
        <Link href="/admin/gallery/portfolio">Portfólio</Link>
        <Link href="/admin/gallery/painting">Pintura</Link>
        <Link href="/admin/gallery/coverup">Cobertura</Link>
        <LogoutButton />
      </nav>
      <main>{children}</main>
    </>
  )
}
