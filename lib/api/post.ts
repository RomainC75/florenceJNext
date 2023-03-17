import fetchGraphQL from './graphql/fetchGraphQL'

function extractPosts(fetchResponse) {
  return fetchResponse?.data?.postCollection?.items
}

export async function getPosts() {
  const posts = await fetchGraphQL(`
    query {
        postCollection(order: [date_DESC]) {
          items {
            sys{
              id
            }
            title
            content{
              json
            }
            date
            imagesCollection{
              items{
                url
                title
              }
            }
            tags
            
          }
        }
      }
    `)
  return extractPosts(posts)
}
