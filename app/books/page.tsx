import BookList from '@/components/BookList';
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

// type Book = {
//     id: Key;
//     title: string;
//     url: UrlObject;
// };

const books = [
    {
        title: "Tress of the Emerald Sea",
        url: "https://ytymycdsazkxmwuuvfsz.supabase.co/storage/v1/object/public/Books/Tress%20of%20the%20Emerald%20Sea.pdf?t=2023-12-19T12%3A45%3A46.119Z"
    },
    {
        title: "Pachinko",
        url: "https://ytymycdsazkxmwuuvfsz.supabase.co/storage/v1/object/public/Books/Pachinko%20A%20Novel.pdf"
    },
    {
        title: "The Sword of Kaigen",
        url: "https://ytymycdsazkxmwuuvfsz.supabase.co/storage/v1/object/public/Books/The%20Sword%20of%20Kaigen%20(M.L.%20Wang)%20(Z-Library).pdf?t=2023-12-14T10%3A16%3A46.524Z"
    },
    {
        title: "If We Were Villains",
        url: "https://ytymycdsazkxmwuuvfsz.supabase.co/storage/v1/object/public/Books/If%20We%20Were%20Villains.pdf?t=2023-12-25T07%3A14%3A49.183Z"
    },
    {
        title: "The Travelling Cat Chronicles",
        url: "https://ytymycdsazkxmwuuvfsz.supabase.co/storage/v1/object/public/Books/The%20Travelling%20Cat%20Chronicles.pdf"
    },
    {
        title: "The Anthropocene Reviewed Essays on a Human-Centered Planet",
        url: "https://ytymycdsazkxmwuuvfsz.supabase.co/storage/v1/object/public/Books/The%20Anthropocene%20Reviewed%20Essays%20on%20a%20Human-Centered%20Planet.pdf?t=2023-12-19T12%3A44%3A40.269Z"
    },
    {
        title: "Norse Mythology",
        url: "https://ytymycdsazkxmwuuvfsz.supabase.co/storage/v1/object/public/Books/Norse%20Mythology.pdf" 
    }
]

export default async function Page() {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    //const { data: books }:{ data: any } = await supabase.from('Books').select("*");
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
