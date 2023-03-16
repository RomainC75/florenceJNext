import {
  ImageIdConvertorInterface,
  RawImageInterface,
} from '../../@types/image.type'
import { IMAGEIDCONVERTOR_GRAPHQL_FIELDS } from './graphql/imageConvertor.graphql'
import fetchGraphQL from './graphql/fetchGraphQL'

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
