import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import DefaultLayout from "../layouts/defaultLayout"
import PageNav from "../components/page-nav"

const PageBodyContainer = styled.div`
  display: flex;
  position: relative;
  .pageContent {
    width: 90rem;
  }
`

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
      headings {
        depth
        value
      }
    }
  }
`

const TutorialTemplate = ({ data: { mdx: post } }) => (
  <DefaultLayout>
    <h1>{post.frontmatter.title}</h1>
    <PageBodyContainer>
      <div class="pageContent">
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
      <PageNav pageHeaders={post.headings} />
    </PageBodyContainer>
  </DefaultLayout>
)

export default TutorialTemplate

// allMdx {
//   nodes {
//     headings {
//       value
//       depth
//     }
//   }
// }

// query($slug: String!) {
//   mdx(frontmatter: { slug: { eq: $slug } }) {
//     frontmatter {
//       title
//     }
//     body
//   }
// }
