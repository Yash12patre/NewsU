import Link from 'next/link'
import {FC} from 'react'

const Navbar:FC = () => {
  return (
    <nav className="overflow-x-auto px-4 whitespace-nowrap border-b border-gray-300 bg-white sticky top-0 z-20">
      <ul className="flex space-x-6 py-2 text-xs">
        <li><Link href="/world">World</Link></li>
        <li><Link href="/business">Business</Link></li>
        <li><Link href="/science">Science</Link></li>
        <li><Link href="/health">Health</Link></li>
        <li><Link href="/sports">Sports</Link></li>
        <li><Link href="">Books</Link></li>
        <li><Link href="">Lifestyle</Link></li>
        <li><Link href="">Food</Link></li>
        <li><Link href="">Travel</Link></li>
        <li><Link href="">Bitcoin</Link></li>
        <li><Link href="">Share</Link></li>
        <li><Link href="">E-Sport</Link></li>
        <li><Link href="/india">India</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar