import BookCard from "./BookCard";
import { UrlObject } from "url";
import styles from "./books.module.css"
import { cookies } from "next/headers";
import { createClient } from '@/utils/supabase/server'
import fs from "fs"

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

export default async function BookList({ books } : {books:any[]}) {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    let first6; 
    const final = books[6];


    try {
        const loadedString = fs.readFileSync('first6.json', 'utf8');
        if (loadedString) {
            first6 = JSON.parse(loadedString);
        }
    } catch (error) {
        console.error('Error reading or parsing file:', error);
        first6 = books.slice(0, 6);
        shuffleArray(first6);
        const jsonString = JSON.stringify(first6, null, 2);
        fs.writeFileSync('first6.json', jsonString);
    }

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