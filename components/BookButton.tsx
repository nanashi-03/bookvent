export default async function BookButton() {
    return (
        <a
            className="py-2 px-3 flex rounded-md no-underline hover:bg-btn-background-hover border"
            href="/books"
        >
            Surprise me!
        </a>
    )
}