import { createFileRoute } from '@tanstack/react-router'
import PresentationShell from '../components/presentation/PresentationShell'

export const Route = createFileRoute('/')({
  component: PresentationPage,
})

function PresentationPage() {
  return (
    <main className="flex-1 w-full flex flex-col items-center justify-center py-2 sm:py-4">
      <PresentationShell />
    </main>
  )
}
