import BookCard from "./BookCard";
import { UrlObject } from "url";
import styles from "./books.module.css"
import { cookies } from "next/headers";
import { createClient } from '@/utils/supabase/server'
// import fs from "fs"

function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

type Book = {
    title: string;
    url: UrlObject;
};

const books = [
    {
        "title": "Tress of the Emerald Sea",
        "url": "https://ytymycdsazkxmwuuvfsz.supabase.co/storage/v1/object/public/Books/Tress%20of%20the%20Emerald%20Sea.pdf?t=2023-12-19T12%3A45%3A46.119Z"
    },
    {
        "title": "Pachinko",
        "url": "https://ytymycdsazkxmwuuvfsz.supabase.co/storage/v1/object/public/Books/Pachinko%20A%20Novel.pdf"
    },
    {
        "title": "The Sword of Kaigen",
        "url": "https://ytymycdsazkxmwuuvfsz.supabase.co/storage/v1/object/public/Books/The%20Sword%20of%20Kaigen%20(M.L.%20Wang)%20(Z-Library).pdf?t=2023-12-14T10%3A16%3A46.524Z"
    },
    {
        "title": "Fourth Wing (The Empyrean Book 01)",
        "url": "https://ytymycdsazkxmwuuvfsz.supabase.co/storage/v1/object/public/Books/Fourth%20Wing%20(The%20Empyrean%20Book%2001).pdf?t=2023-12-19T12%3A43%3A43.532Z"
    },
    {
        "title": "The Travelling Cat Chronicles",
        "url": "https://ytymycdsazkxmwuuvfsz.supabase.co/storage/v1/object/public/Books/The%20Travelling%20Cat%20Chronicles.pdf"
    },
    {
        "title": "The Anthropocene Reviewed Essays on a Human-Centered Planet",
        "url": "https://ytymycdsazkxmwuuvfsz.supabase.co/storage/v1/object/public/Books/The%20Anthropocene%20Reviewed%20Essays%20on%20a%20Human-Centered%20Planet.pdf?t=2023-12-19T12%3A44%3A40.269Z"
    }
]

export default async function BookList() {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    let first6 = books.slice(0, 6);
    const final = books[6];

    // if (fs.existsSync('./first.json')) {
    //     try {
    //         const loadedString = fs.readFileSync('./first6.json', 'utf8');
    //         if (loadedString) {
    //             first6 = JSON.parse(loadedString);
    //         }
    //     } catch (error) {
    //         console.error('Error reading or parsing file:', error);
    //     }
    // } 

    // if (!first6) {
    //     first6 = 
    //     shuffleArray(first6);
    //     const jsonString = JSON.stringify(first6, null, 2);
    //     fs.writeFileSync('./first6.json', jsonString);
    // }

    return (
        <ul className={styles.booklist}>
            {first6.map((book: any, index: any) => (
                <li key={book.title} className={styles.book}>
                    <BookCard id={index+1} {...book}/>
                </li>
            ))}
            <li key={final.title} className={styles.book}>
                <BookCard id={7} {...final} />
            </li>
        </ul>
    );
};