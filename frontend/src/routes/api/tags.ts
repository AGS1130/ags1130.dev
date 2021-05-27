import { content } from '$lib/data/fetchClient';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get() {
  try {
    const tags = await content.fetch(`*[_type == 'tag']{color, gradient, iconPath, name, slug}`);

    if (tags) {
      return { body: { tags: JSON.stringify({ tags }) } };
    }
  } catch (err) {
    return {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        message: JSON.stringify({ err })
      }
    };
  }
}
