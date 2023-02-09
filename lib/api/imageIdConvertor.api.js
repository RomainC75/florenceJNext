import { IMAGEIDCONVERTOR_GRAPHQL_FIELDS } from "./graphql/imageConvertor.graphql";


async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

function extractImageEntries(fetchResponse) {
  return fetchResponse?.data?.imageIdConvertorCollection?.items;
}

function extractImageEntry(fetchResponse) {
    return fetchResponse?.data?.imageIdConvertorCollection?.items[0].imageId;
  }

export async function getAllImageId(preview) {
  const entries = await fetchGraphQL(
    `query {
        imageIdConvertorCollection(preview: ${preview ? "true" : "false"}) {
        items {
          ${IMAGEIDCONVERTOR_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  return extractImageEntries(entries);
}

export async function getImageIdByName(name) {
    const entry = await fetchGraphQL(
      `query {
        imageIdConvertorCollection(where: { name: "${name}" }, preview: true, limit: 1) {
          items {
            ${IMAGEIDCONVERTOR_GRAPHQL_FIELDS}
          }
        }
      }`,
      true
    );
    return extractImageEntry(entry);
  }
