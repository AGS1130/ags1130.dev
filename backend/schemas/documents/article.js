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
      type: 'text',
      title: 'Description',
      description: 'Describe for SEO'
    },
    {
      // Not a good idea to maintain 🙁
      // Better to surrender control
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      options: {
        list: [
          {
            title: 'JavaScript',
            value: 'javascript'
          },
          {
            title: 'Typescript',
            value: 'typescript'
          },
          {
            title: 'Vue',
            value: 'vue'
          },
          {
            title: 'Angular',
            value: 'angular'
          },
          {
            title: 'React',
            value: 'react'
          },
          {
            title: 'Svelte',
            value: 'svelte'
          },
          {
            title: 'Next.js',
            value: 'nextjs'
          },
          {
            title: 'Nuxt.js',
            value: 'nuxtjs'
          },
          {
            title: 'Gatsby',
            value: 'gatsby'
          },
          {
            title: 'Gridsome',
            value: 'gridsome'
          },
          {
            title: 'CSS',
            value: 'css'
          },
          {
            title: 'PostCSS',
            value: 'postcss'
          },
          {
            title: 'Sass',
            value: 'sass'
          },
          {
            title: 'Bootstrap',
            value: 'bootstrap'
          },
          {
            title: 'Bulma',
            value: 'bulma'
          },
          {
            title: 'Tailwind CSS',
            value: 'tailwindcss'
          },
          {
            title: 'Webpack',
            value: 'webpack'
          },
          {
            title: 'Rollup',
            value: 'rollup'
          },
          {
            title: 'Vite',
            value: 'vite'
          },
          {
            title: 'Lighthouse',
            value: 'lighthouse'
          },
          {
            title: 'Jamstack',
            value: 'jamstack'
          },
          {
            title: 'Personal',
            value: 'personal'
          }
        ]
      }
    }
  ]
}
