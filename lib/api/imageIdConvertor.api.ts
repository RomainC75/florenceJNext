import {
  ImageIdConvertorInterface,
  RawImageInterface,
} from '../../@types/image.type'
import { IMAGEIDCONVERTOR_GRAPHQL_FIELDS } from './graphql/imageConvertor.graphql'

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

function extractImageEntries(fetchResponse) {
  return fetchResponse?.data?.imageIdConvertorCollection?.items
}

function extractImageIdEntry(fetchResponse): string | null {
  console.log('fetch Response : ', fetchResponse)
  try {
    return fetchResponse?.data?.imageIdConvertorCollection?.items[0].imageId
  } catch (error) {
    return null
  }
}

export async function getAllImageId(preview) {
  const entries: RawImageInterface = await fetchGraphQL(
    `query {
        imageIdConvertorCollection(preview: ${preview ? 'true' : 'false'}) {
        items {
          ${IMAGEIDCONVERTOR_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return extractImageEntries(entries)
}

export async function getImageIdByName(name: string): Promise<string | null> {
  const entry: RawImageInterface = await fetchGraphQL(
    `query {
        imageIdConvertorCollection(where: { name: "${name}" }, preview: true, limit: 1) {
          items {
            ${IMAGEIDCONVERTOR_GRAPHQL_FIELDS}
          }
        }
      }`,
    true
  )
  return extractImageIdEntry(entry)
}

export async function getImageIdsAndNamesContaining(
  name: string
): Promise<ImageIdConvertorInterface[]> {
  const entry: RawImageInterface = await fetchGraphQL(
    `query {
        imageIdConvertorCollection(where: { name_contains: "${name}" }, preview: true) {
          items {
            ${IMAGEIDCONVERTOR_GRAPHQL_FIELDS}
          }
        }
      }`,
    true
  )

  const extractedEntries: ImageIdConvertorInterface[] =
    extractImageEntries(entry)
  return extractedEntries.sort((a, b) => a.name.localeCompare(b.name))
}

export function getAltFromFileName(fileName: string): string {
  return fileName.split('.')[0]
}
