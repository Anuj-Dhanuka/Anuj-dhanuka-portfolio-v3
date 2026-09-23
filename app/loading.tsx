export default function Loading() {
  return (
    <main
      className="min-h-screen bg-white px-4 pb-20 pt-32 dark:bg-gray-950"
      aria-busy="true"
      aria-label="Loading page"
    >
      <div className="container mx-auto animate-pulse">
        <div className="h-4 w-32 rounded bg-purple-100 dark:bg-purple-900/40" />
        <div className="mt-6 h-14 max-w-2xl rounded bg-gray-200 dark:bg-gray-800" />
        <div className="mt-4 h-6 max-w-xl rounded bg-gray-100 dark:bg-gray-900" />
      </div>
      <span className="sr-only">Loading…</span>
    </main>
  )
}
