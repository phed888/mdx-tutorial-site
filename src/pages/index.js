import React from "react"
import DefaultLayout from "../layouts/defaultLayout"

export default () => {
  return (
    <DefaultLayout>
      <h1>CDS design tutorials</h1>
      <br />
      <p>
        The Conversation Design System (CDS) is a set of standards, components
        and resources to facilitate the design of interactions with the Virtual
        Agent Platform (VAP).
      </p>
      <p>
        The tutorials on this site will walk through the process that the
        Conversation Platform and Customer Experience (CPCE) have found to be
        effective in the last 3 years of conversation design.
      </p>
      <p>
        Use the navigation on the left to explore the parts of the tutorial.
      </p>
      {/* <Link to="/test/">Test page</Link> */}

      {/* <h2>Read my posts</h2>
    {posts.map(post => (
      <PostPreview post={post} key={post.slug} />
    ))} */}
    </DefaultLayout>
  )
}
