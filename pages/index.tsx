import Head from 'next/head'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'

export default function Home({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>MyProfile</title>
      </Head>
      <section>

      </section>
    </div>
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
