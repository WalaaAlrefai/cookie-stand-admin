

import Link from 'next/link'

import { useAuth } from '@/contexts/authintication'

const header = () => {
  const { logout } = useAuth()
  return (
    <header
      className='flex justify-between p-4'
      style={{ backgroundColor: '#15B981' }}
    >
      <p className='text-3xl'>Cookie Stand Admin</p>
      <Link href='#'>
        Home
      </Link>
      <button className="p-2 text-white bg-gray-500 rounded" onClick={()=>logout()}>
            logout
          </button>
    </header>
  )
}

export default header