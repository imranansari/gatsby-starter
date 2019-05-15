import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby'; 

const Articles = () => {

	const data = useStaticQuery(graphql`
		query {
  		allMarkdownRemark {
    		edges {
      		node {
        		frontmatter {
          		title
        		}
      		}
    		}
  		}
		}
	`);

  return (
    <section>
	    <div className="column-left">
    		<h2>My Articles</h2>
	    </div>
	    <div className="column-main">
	        <div className="column-main-container-large column-with-links">
						{ data.allMarkdownRemark.edges.map((edge) => {
							return(
								<Link to="blog" className="link link-preview">
									{ edge.node.frontmatter.title }
								</Link>
							)
						})}
	        </div>
	    </div>
	</section>
  )
}

export default Articles
