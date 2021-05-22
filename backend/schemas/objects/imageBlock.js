export default {
  name: 'imageBlock',
  type: 'image',
  title: 'Image',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessibility.',
      validation: Rule => Rule.required().error('Must have an alternative text.'),
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageURL: 'asset.url',
      title: 'caption'
    }
  }
}
