import React from 'react';

const Clients = props => {
  return (
    <section>
	    <div className="column-left">
	        <h2>Clients</h2>
	    </div>
	    <div className="column-main">
	        <div className="column-main-container-large">
	        	<h1>{ props.Clients }</h1>
	        </div>
	    </div>
	</section>
  )
}

export default Clients;
