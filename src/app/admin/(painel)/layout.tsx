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
        <LogoutButton />
      </nav>
      <main>{children}</main>
    </>
  )
}
