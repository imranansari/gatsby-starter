import React from 'react';

const Tools = props => {
  return (
    <section>
		<div className="column-left">
		    <h2>Tools I Use</h2>
		</div>
		<div className="column-main">
		    <div className="column-main-container-large">
		        <h1>{ props.Tools }</h1>
		    </div>
		</div>
	</section>
  )
}

export default Tools;
