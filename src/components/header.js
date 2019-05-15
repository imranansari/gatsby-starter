import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import "./layout.css"

const Header = () => {
	const data = useStaticQuery(graphql`
		query {
  		site {
    		siteMetadata {
        	name
        	jobtitle
        	email
      	}
  		}
		}		
	`);
	
  return (
    <section className="header">
				<div className="column-left">
        	<Link to="/">
						<h2 className="logo-type">{ data.site.siteMetadata.name }</h2>
					</Link> 
     	 </div>
      	<div className="column-main">
       		<h3 className="header-services">{ data.site.siteMetadata.jobtitle }</h3>
       		<div className="column-right header-contact">
          		<a href="mailto:hello@myemailaddress.com" className="text-light">
            		{ data.site.siteMetadata.email }
          		</a>
        	</div>
      	</div>
   	 </section>
  );
};

export default Header;
