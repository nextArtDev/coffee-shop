import { signOut } from '@/auth'
import { ModeToggle } from '@/components/shared/mode-toggle'
import { logout } from '@/lib/actions/auth/logout'
import { currentUser } from '@/lib/auth'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const user = await currentUser()
  // console.log(user?.image)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="text-7xl">{user?.name}</p>
      <Link href={'/logout'}>Logout</Link>
    </main>
  )
}
