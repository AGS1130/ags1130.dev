// The source for colors and SVG Paths
// https://simple-icons.github.io/simple-icons-website/
export default {
  name: 'tag',
  title: 'Tag',
  type: 'document',
  fields: [
    {
      title: 'Popular',
      name: 'isPopular',
      type: 'boolean'
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: Rule =>
        Rule.required()
          .min(3)
          .error('A tag of min. 3 characters is required.')
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name'
      }
    },
    {
      name: 'iconPath',
      type: 'text',
      title: 'Icon SVG Path',
      validation: Rule => Rule.required()
    },
    {
      name: 'color',
      type: 'string',
      title: 'Color',
      description: 'Use hex colors (#000 or #000000).',
      validation: Rule =>
        Rule.required()
          .min(4)
          .max(7)
          .error(`Must include '#' symbol and 3 to 6 characters.`)
    },
    {
      name: 'gradient',
      type: 'string',
      title: 'Gradient color',
      description: 'For linear gradients.',
      initialValue: 'linear-gradient(90deg, #fff 0%, #fff 100%)'
    }
  ]
};
