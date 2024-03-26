'use client'

import { Loader } from '@/components/dashboard/Loader'

const Loading = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <Loader />
    </div>
  )
}

export default Loading
