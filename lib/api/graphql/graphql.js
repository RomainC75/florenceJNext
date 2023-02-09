export const POST_GRAPHQL_FIELDS = `
slug
title
coverImage {
  url
}
date
author {
  name
  picture {
    url
  }
}
excerpt
content {
  json
  links {
    assets {
      block {
        sys {
          id
        }
        url
        description
      }
    }
  }
}
`;

export const ENCART_GRAPHQL_FIELDS = `
  title
  rtext{
    json
  }
`;

export const IMAGEIDCONVERTOR = `
total
items{
  name
  imageId
}
}
`;
