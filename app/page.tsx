import UrlForm from './components/UrlForm'

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Website Performance Auditor</h1>
      <UrlForm />
    </main>
  )
}