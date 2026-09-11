export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav>
        <h1>Admin Layout</h1>
      </nav>
      <main>{children}</main>
    </>
  )
}
