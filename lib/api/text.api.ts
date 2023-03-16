import { ENCART_GRAPHQL_FIELDS } from './graphql/graphql'
import fetchGraphQL from './graphql/fetchGraphQL'

function extractPost(fetchResponse) {
  return fetchResponse?.data?.postCollection?.items?.[0]
}

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.postCollection?.items
}

export async function getPreviewPostBySlug(slug) {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${ENCART_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  )
  return extractPost(entry)
}

export async function getAllPostsWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_exists: true }, order: date_DESC) {
        items {
          ${ENCART_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractPostEntries(entries)
}

export async function getAllPostsForHome(preview) {
  const entries = await fetchGraphQL(
    `query {
      postCollection(order: date_DESC, preview: ${preview ? 'true' : 'false'}) {
        items {
          ${ENCART_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return extractPostEntries(entries)
}

export async function getPostAndMorePosts(slug, preview) {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: ${
      preview ? 'true' : 'false'
    }, limit: 1) {
        items {
          ${ENCART_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
      preview ? 'true' : 'false'
    }, limit: 2) {
        items {
          ${ENCART_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return {
    post: extractPost(entry),
    morePosts: extractPostEntries(entries),
  }
}

export async function getAllEncart(preview?: boolean) {
  const entries = await fetchGraphQL(
    `query {
      encartCollection {
        total
        items {
          ${ENCART_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )

  return entries.data.encartCollection.items
    ? entries.data.encartCollection.items
    : null
}

export async function getEncartOnPage(pageName, preview?: boolean) {
  const entries = await fetchGraphQL(
    `query {
      encartCollection (where:{page:"${pageName}"}, order: [title_ASC]){
        total
        items {
          ${ENCART_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )

  return entries.data.encartCollection.items
    ? entries.data.encartCollection.items
    : null
}
