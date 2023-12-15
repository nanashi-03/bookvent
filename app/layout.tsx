import { GeistSans } from 'geist/font/sans'
import './globals.css'
import Logo from '../components/Logo'
import AuthButton from '../components/AuthButton'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Bookvent',
  description: 'The 7 day advent calender for Books',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          <div className="flex-1 w-full flex flex-col gap-20 items-center">
            <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
              <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
                <Logo />
                <AuthButton />
              </div>
            </nav>
            {children}
            <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
              <p>
                Merry Christmas, my love!
              </p>
            </footer>
          </div>
        </main>
      </body>
    </html>
  )
}
