'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { UserButton } from '@/components/auth/user-button'

export const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px] shadow-sm">
      <div className="flex gap-x-2">
        <Button
          asChild
          variant={pathname === '/protected/server' ? 'default' : 'outline'}
        >
          <Link href="/protected/server">سرور</Link>
        </Button>
        <Button
          asChild
          variant={pathname === '/protected/client' ? 'default' : 'outline'}
        >
          <Link href="/protected/client">کلاینت</Link>
        </Button>
        <Button
          asChild
          variant={pathname === '/protected/admin' ? 'default' : 'outline'}
        >
          <Link href="/protected/admin">ادمین</Link>
        </Button>
        <Button
          asChild
          variant={pathname === '/protected/settings' ? 'default' : 'outline'}
        >
          <Link href="/protected/settings">تنظیمات</Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  )
}
