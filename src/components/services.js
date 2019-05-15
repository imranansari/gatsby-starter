import React from 'react';

const Services = props => {
  return (
    <section>
		<div className="column-left">
			<h2>Services</h2>
		</div>
		<div className="column-main">
			<div className="column-main-container-large">
				<h1>{ props.Services }</h1>
			</div>
		</div>
	</section>
  )
}

export default Services;
