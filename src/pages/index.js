import React from "react";

import Layout from '../components/layout';
import Tools from '../components/tools';
import Services from '../components/services';
import Clients from '../components/clients';
import Articles from '../components/articles';


const index = () => {
  return (
    <Layout>
			<Tools Tools="React, Javascript, Node, GraphQL, Gatsby" />	
	    <Services Services="Full-Stack Development, User Experience Design, Interface Design"/>
			<Clients Clients="John Lewis, AT&T, Hiscox, Mango Solutions"/>
			<Articles />
      
    </Layout>
  )
}

export default index

