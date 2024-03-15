import { ModeToggle } from '@/components/shared/mode-toggle'
import { currentUser } from '@/lib/auth'
import Image from 'next/image'

export default async function Home() {
  const user = await currentUser()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="text-7xl">{user?.name}</p>
    </main>
  )
}
