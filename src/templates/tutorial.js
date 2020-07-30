import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import DefaultLayout from "../layouts/defaultLayout"
import ReadLink from "../styles/readlink"
import PageNav from "../components/page-nav"

const PageBodyContainer = styled.div`
  display: flex;
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
      <PageNav />
    </PageBodyContainer>
  </DefaultLayout>
)

export default TutorialTemplate
