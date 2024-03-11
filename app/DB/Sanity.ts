// sanity.js
import {createClient} from '@sanity/client'
import  ImageUrlBuilder  from '@sanity/image-url'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: process.env.Sanity_Project_Public_ID,
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

const builder = ImageUrlBuilder(client)

// to fetch image url from sanity
export function urlFor(source:any) {
    return builder.image(source)
  }

// // uses GROQ to query content: https://www.sanity.io/docs/groq
// export async function getPosts() {
//   const posts = await client.fetch('*[_type == "post"]')
//   return posts
// }

// export async function createPost(post: Post) {
//   const result = client.create(post)
//   return result
// }

// export async function updateDocumentTitle(_id, title) {
//   const result = client.patch(_id).set({title})
//   return result
// }