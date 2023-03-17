import fetchGraphQL from './graphql/fetchGraphQL'

function extractPosts(fetchResponse) {
  return fetchResponse?.data?.postCollection?.items
}
function extractPost(fetchResponse) {
  return fetchResponse?.data?.post
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

export async function getPostById(id: string) {
  const posts = await fetchGraphQL(`
    {
      post(id: "${id}") {
        sys {
          id
        }
        title
        content {
          json
        }
        date
        imagesCollection {
          items {
            url
            title
          }
        }
        tags
      }
    }
    `)
  return extractPost(posts)
}
