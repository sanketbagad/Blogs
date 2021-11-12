import React from 'react'

const PostCard = ({ post }) => {
    {console.log(post)}
    return (
        <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
           <div className="relative overflow-hidden shadow-md pb-80 mb-6">
               <img 
               src={post.featuredImage.url}
               alt={post.title}
                className="w-full h-80 object-top shadow-lg rounded-t-lg lg:rounded-lg object-cover"
               />
           </div>
           <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
               <Link href={`/post/${post.slug}`}>
                   {post.title}
               </Link>
           </h1>
           <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
                <div className="w-full flex items-center justify-center mb-4 lg:mb-8 lg:w-auto mr-8">
                    <img width="30px" height="30px" src={post.author.photo.url} alt={post.author.name} className="align-middle rounded-full " />
                    <p className="inline align-middle text-gray-700 ml-2 text-lg"> {post.author.name} </p>
                </div>
                <div className="font-medium text-gray-700">

                </div>
           </div>
        </div>
    )
}

export default PostCard
