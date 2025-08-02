import { news } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import Tag from './Tag'

const Article = ({data}:{data:news}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6 hover:shadow-lg transition-shadow">
      <div className="relative w-full h-[220px]">
        <Image src={data?.urlToImage || '/img/news-u-logo.webp'} alt={data?.title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <Link href={data?.url} legacyBehavior>
          <a target="_blank" className="font-bold text-lg hover:underline">{data?.title}</a>
        </Link>
        <div className="flex flex-wrap gap-2 my-2">
          <Tag data={data?.source.name} />
          <Tag data={data?.author} />
          <Tag data={new Date(data?.publishedAt).toDateString()} />
        </div>
        <p className="text-sm text-gray-700">{data?.description}</p>
        <Link href={data?.url} legacyBehavior>
          <a target="_blank" className="inline-block mt-2 text-blue-600 text-xs hover:underline">Read More</a>
        </Link>
      </div>
    </div>
  )
}

export default Article