"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { UrlObject } from "url";

type Book = {
    id: number;
    title: string;
    url: UrlObject;
};

type BookCardProps = Book;
const formatTime = (durationInSeconds: number) => {
    const days = Math.floor(durationInSeconds / 86400);
    const hours = Math.floor((durationInSeconds % 86400) / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const seconds = durationInSeconds % 60;

    return { days, hours, minutes, seconds };
};

const BookCard: React.FC<BookCardProps> = ({ id, title, url}) => {
    const cardStyle: React.CSSProperties = {
        padding: '5px',
        textDecoration: 'none',
        display: 'block',
        alignSelf: 'center',
        width: 'auto',
        margin: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    };

    const disabledLinkStyle: React.CSSProperties = {
        pointerEvents: 'none',
        opacity: 0.5,
    };
    
    console.log(`${id}: ${title}`);
    

    const initialTimestamp = 1702911600;
    const diff = 86400;
    const epochTimestamp = initialTimestamp + (id-1)*diff;

    const [showTitle, setShowTitle] = useState<boolean>(false);
    const [countdown, setCountdown] = useState<number>(epochTimestamp - Math.floor(Date.now() / 1000));

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);

            if (countdown <= 0) {
                setShowTitle(true);
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [countdown]);

    let times = formatTime(countdown);

    return (
        <Link className="bg-foreground hover:bg-btn-background-hover rounded-md text-btn-background" href={url} style={{ ...cardStyle, ...(countdown > 0 ? disabledLinkStyle : {}) }} onClick={(e) => countdown > 0 && e.preventDefault()}>
            {!showTitle && <h3 suppressHydrationWarning={true}>Come back after {times.days} days, {times.hours} hours, {times.minutes} minutes and {times.seconds} seconds</h3>}
            {showTitle && <h3>{title}</h3>}
            {/* <h3>{title}</h3> */}
        </Link>
    );
};

export default BookCard;