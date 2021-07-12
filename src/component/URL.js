import React from 'react';

const URL = ({ numberOfUrl }) => {
	// useEffect(() => {
	// 	(window.adsbygoogle = window.adsbygoogle || []).push({});
	// }, []);
	return (
		<div className='URL__Component'>
			<div className='url__detail'>
				<h2>{numberOfUrl}</h2>
				<h3 className='ending-h3 text-capitalize'>
					Links Powered By Swarajya URL Shortner
				</h3>
				{/* <ins
					className='adsbygoogle'
					style={{ display: 'block', width: '100%' }}
					data-ad-client='ca-pub-9213691122273422'
					data-ad-slot='9865473776'
					data-ad-format='auto'
					data-adtest='on'
					data-full-width-responsive='true'></ins> */}
			</div>
		</div>
	);
};

export default URL;
