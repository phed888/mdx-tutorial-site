import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import DefaultLayout from '../layouts/defaultLayout'
import ReadLink from '../styles/readlink'

const Attribution = styled.caption`
  font-size: 1.2rem;
`

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

const TutorialTemplate = ({ data: { mdx: post } }) => (
  <DefaultLayout>
    <h1>{post.frontmatter.title}</h1>
    <Attribution>Posted by {post.frontmatter.author}</Attribution>
    <MDXRenderer>{post.body}</MDXRenderer>
    <ReadLink to="/">Back to posts index</ReadLink>
  </DefaultLayout>
);

export default TutorialTemplate;