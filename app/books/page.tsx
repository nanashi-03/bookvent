import BookList from '@/components/BookList';
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

// type Book = {
//     id: Key;
//     title: string;
//     url: UrlObject;
// };

export default async function Page() {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data: books }:{ data: any } = await supabase.from('Books').select("*");
    const {
        data: { user },
    } = await supabase.auth.getUser()

    if(!user?.id) {
        return (
            <h1>You're not logged in, my love.</h1>
        )
    } else {
        return (
            <div className='my-auto'>
                <BookList books={books}></BookList>
            </div>
        )
    }
}