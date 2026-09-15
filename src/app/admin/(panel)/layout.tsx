import { LogoutButton } from '@/components/admin/LogoutButton'
import { AdminNav } from '@/components/admin/AdminNav'

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
      <AdminNav />
      <main className="px-4 py-6">{children}</main>
    </div>
  )
}
