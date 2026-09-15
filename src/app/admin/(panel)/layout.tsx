import Link from 'next/link'
import { LogoutButton } from '@/components/admin/LogoutButton'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-surface min-h-screen">
      <header className="border-outline-variant flex justify-between border-b px-4 py-3 text-center">
        <p className="text-on-surface text-sm">
          Olá, <span className="font-medium">Felipe</span>, seja bem-vindo
        </p>
        <LogoutButton />
      </header>

      <nav className="border-outline-variant bg-surface-container flex items-center justify-between gap-4 border-b px-4 py-2 lg:justify-center lg:gap-20">
        <Link
          href="/admin/gallery/portfolio"
          className="text-on-surface-variant hover:text-accent text-sm"
        >
          Portfólio
        </Link>
        <Link
          href="/admin/gallery/painting"
          className="text-on-surface-variant hover:text-accent text-sm"
        >
          Pinturas
        </Link>
        <Link
          href="/admin/gallery/coverup"
          className="text-on-surface-variant hover:text-accent text-sm"
        >
          Coberturas
        </Link>
      </nav>

      <main className="px-4 py-6">{children}</main>
    </div>
  )
}
