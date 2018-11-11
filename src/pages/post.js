import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Post = () => (
  <Layout>
    <h1>This is a post page</h1>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Post
