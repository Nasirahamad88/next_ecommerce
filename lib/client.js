
// import sanityClient from '@sanity/client';
// import { createClient } from '@sanity/client';
// import imageUrlBuilder from '@sanity/image-url';

// export const client = createClient({
//   projectId: "3mlf50gv",
//   dataset: "production",
//   apiVersion: "2023-08-12",
//   useCdn: true,
//   token: process.env.NEXT_PUBLIC_SANITY_TOKEN
// });

// const builder = imageUrlBuilder(client);

// export const urlFor = (source) => builder.image(source);
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: "3mlf50gv",
  dataset: "production",
  apiVersion: "2023-08-12",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
