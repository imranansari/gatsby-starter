import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout'

const blog = () => {
  return (
    <Layout>
        <section>
            <div className="column-left">
                 Blog Post
            </div>
            <div className="column-main">
                <h1 className="column-main-container-large">Hello</h1>
            </div>
        </section>  
    </Layout>
  )
}

export default blog;
