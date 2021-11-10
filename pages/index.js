import Head from 'next/head'
import {Postcard, Categories, PostWidget} from "../Components/index"

const posts = [
  {
    title: 'Hello Next.js',
    excerpt: 'Welcome to Next.js!',
  },
  {
    title: 'Getting Started',
    excerpt: 'Thanks for using Next.js!',
  },
]


export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Sanket Bagad's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
         <div className="lg:col-span-8 col-span-1">
          <Postcard posts={posts}/>
         </div>
         <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget/>
              <Categories/>
            </div>
         </div>
      </div>
     
    </div>
  )
}
