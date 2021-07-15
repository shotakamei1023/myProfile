import Head from 'next/head'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Image from 'next/image'


export default function Home({ allPostsData }) {
  return (
    <div className="font-Lato">
      <Head>
        <title>MyProfile</title>
      </Head>
      <header className="flex flex-wrap max-w-78vw mx-auto">
        <div className="w-full">
          <img src="/logo.png" alt="プロフィール画像" loading="lazy" className="max-w-72 mx-auto" />
        </div>
        <nav className="w-78vw">
          <ul className="text-xl font-bold flex justify-between">
            <li>about</li>
            <li>skills</li>
            <li>values</li>
            <li>future</li>
          </ul>
        </nav>
      </header >
    </div >
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
