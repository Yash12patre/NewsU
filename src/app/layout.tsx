import type { Metadata } from 'next'
import { Trispace } from 'next/font/google'
import Navbar from '@/components/Navbar'
import './globals.css'
import Header from '@/components/Header'
import RandomNews from '@/components/RandomNews'

const trispace = Trispace({weight: ['400','500','600'],
subsets: ['latin']})

export const metadata: Metadata = {
  title: 'News-U',
  description: 'news for you where you can find what you need',
  icons:{
    icon: [{ url: '/img/favicon-32x32.png',sizes:"32x32" }, {url: '/img/favicon-16x16.png',sizes:"16x16"}],
    apple: {
      url: "/img/apple-touch-icon.png",
      sizes: "180x180"
    }
  },
  manifest: "/img/site.webmanifest",
  openGraph: {
    title: 'News-U',
    description: 'news for you where you can find what you need',
    type: 'article',
    authors: 'theoyoth',
  },
  keywords:['news-u','news','news about  everything']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={trispace.className}>
        <Header />
        <Navbar />
        <main className="flex flex-col md:flex-row gap-6 mt-4 px-2 md:px-20 py-4">
          {/* Left Sidebar: Trending/Tags */}
          <aside className="hidden md:block w-1/5 px-2">
            {/* Add Trending/Tags component here */}
          </aside>
          {/* Main Content */}
          <section className="flex-1 px-2">{children}</section>
          {/* Right Sidebar: RandomNews */}
          <aside className="w-full md:w-1/4 px-2">
            <RandomNews />
          </aside>
        </main>
        {/* Add <Footer /> here if you create one */}
      </body>
    </html>
  )
}
