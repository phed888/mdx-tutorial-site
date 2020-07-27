import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import ReadLink from '../styles/readlink'

const PreviewContainer = styled.article`
  border-bottom: 1px solid #ddd;
  margin-top: 1.2rem;
  padding-bottom: 1.6rem;
  ::first-of-type {
    margin-top: 1.6rem;
  }
`

const PostPreview = ({ post }) => (
  <PreviewContainer>
    <h3><Link to={post.slug}>{post.title}</Link></h3>
    <p>{post.excerpt}</p>
    <ReadLink to={post.slug}>Read this post</ReadLink>
  </PreviewContainer>
);

export default PostPreview;