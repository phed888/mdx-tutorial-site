import React from "react"
import { Link } from "gatsby"
import DefaultLayout from "../layouts/default-layout"

export default () => (
  <DefaultLayout>
    <h1>Test</h1>
    <p>This is a test page</p>
    <Link to="/">Home</Link>
  </DefaultLayout>
)
