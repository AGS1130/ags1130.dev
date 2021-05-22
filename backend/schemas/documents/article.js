export default {
  name: 'article',
  type: 'document',
  title: 'Article Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => [
        Rule.required()
          .min(3)
          .error('A title of min. 3 characters is required.'),
        Rule.max(80).warning("A title shouldn't be more than 80 characters.")
      ]
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title'
      }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing.'
    },
    {
      name: 'imageBlock',
      type: 'imageBlock',
      title: 'Main image'
    },
    {
      name: 'description',
      type: ''
    }
  ]
}
