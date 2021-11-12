import Head from 'next/head'
import {Postcard, Categories, PostWidget} from "../Components/index"
import {getPosts } from '../services'


export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Sanket Bagad's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
         <div className="lg:col-span-8 col-span-1">
          { posts.map((post, index) => (<Postcard post={post.node} key={post.index}/>))}
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

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
