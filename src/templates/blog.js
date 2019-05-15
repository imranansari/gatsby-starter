import React from 'react'
import { graphql } from 'gatsby';

import Layout from '../components/layout'

export const query = graphql`
  query ($slug: String!) {
    markdownRemark ( fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const blog = props => {
  return (
    <Layout>
        <section>
            <div className="column-left"></div>
            <div className="column-main">
                <h1 className="column-main-container-large">
                  { props.data.markdownRemark.frontmatter.title }
                </h1>
                <h5>
                  { props.data.markdownRemark.frontmatter.date }
                </h5>
                <div className="post-content">
                  <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
                </div>
            </div>
        </section>  
    </Layout>
  )
}

export default blog;
