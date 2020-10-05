import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import DefaultLayout from "../layouts/default-layout"
import PageNav from "../components/page-nav"

const PageBodyContainer = styled.div`
  position: relative;
  .pageContent {
    display: inline-block;
    width: 65%;
  }
  section {
    display: inline-block;
    position: fixed;
    padding: 2rem 0 2rem 2rem;
    margin-top: -10rem;
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
