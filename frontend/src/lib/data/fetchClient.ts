import sanityClient from '@sanity/client';

// create instance of sanityClient
// connects frontend to Sanity Studio
const options = {
  projectId: 'cv1l13fa',
  dataset: 'production',
  token: '',
  useCdn: true
};

export const content = sanityClient(options);
