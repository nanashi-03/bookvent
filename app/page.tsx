import { createClient } from '@/utils/supabase/server'
import BookButton from '@/components/BookButton'
import Header from '@/components/Header'
import { cookies } from 'next/headers'
import LoginButton from '@/components/LoginButton'

export default async function Index() {
  const cookieStore = cookies()

  const supabase = createClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
      <Header />
      <div className='mx-auto'>
        {user ? <BookButton /> : <LoginButton />}
      </div>
    </div>
  )
}
