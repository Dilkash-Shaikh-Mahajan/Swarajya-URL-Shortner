import React from 'react';

const URL = ({ numberOfUrl }) => {
	return (
		<div className='URL__Component'>
			<div className='url__detail'>
				<h2>{numberOfUrl}</h2>
				<h3 className='ending-h3 text-capitalize'>
					Links Powered By Swarajya URL Shortner
				</h3>
			</div>
		</div>
	);
};

export default URL;
