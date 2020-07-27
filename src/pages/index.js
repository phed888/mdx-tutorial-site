import React from "react"
import { Link } from 'gatsby'
import DefaultLayout from '../layouts/defaultLayout'
import usePosts from '../hooks/usePosts'
import PostPreview from '../components/post-preview'

export default () => {

  const posts = usePosts();
  
  return (
  <DefaultLayout>
    <h1>Hello world!</h1>
    <p>This is the home page</p>
    <Link to="/test/">Test page</Link>

    <h2>Read my posts</h2>
    {posts.map(post => (
      <PostPreview post={post} key={post.slug} />
    ))}

  </DefaultLayout>
);
}
