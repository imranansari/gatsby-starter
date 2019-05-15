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
        		html
        		excerpt
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
	        	<Link to="/blog" className="link link-preview">
	        		Gatsby is super dope!
	        	</Link>
                <br className="link-line-break" />
	        	<Link to="/blog" className="link link-preview">
	        		React vs Vue
	        	</Link>
                <br className="link-line-break" />
	        	<Link to="/blog" className="link link-preview">
	        		How I came to be this way.
	        	</Link>
	        </div>
	    </div>
	</section>
  )
}

export default Articles
