exports.createPages = async ({ actions, graphql, reporter }) => {
  const blogPostTemplate = require.resolve(`./src/templates/tutorial`)
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("Failed to create posts", result.errors)
  }

  const posts = result.data.allMdx.nodes

  posts.forEach(post => {
    actions.createPage({
      path: `/${post.frontmatter.slug}/`,
      component: blogPostTemplate,
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })
}
