import sanityClient from '@sanity/client';
import { api } from '../../../../backend/sanity.json'
const { projectId, dataset } = api

// create instance of sanityClient
// connects frontend to Sanity Studio
const options = {
  projectId,
  dataset,
  useCdn: true
};

export const content = sanityClient(options);
