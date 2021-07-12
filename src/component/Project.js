import React from 'react';
// import AdSense from 'react-adsense';
const Project = () => {
	return (
		<div className='container project'>
			<div className='project__title '>
				{/* <h3></h3> */}
				<hr className='hr-text' data-content='Our Products'></hr>
			</div>
			<div className='row mb-3'>
				<div className='col-md-4 mb-3'>
					<div className='card shadow p-3'>
						<img
							className='img-black-thumbnail'
							src='https://res.cloudinary.com/dilkashshaikhmahajan/image/upload/v1620729554/cxbyuavcdsd6gnpwbple.jpg'
							alt='Title'
						/>
						<h4 className='my-2 text-info'>
							Swarajya Blog Website
						</h4>
						<p className='text-justify'>
							Swaraj Blog Website is Startup Website which
							deployed by{' '}
							<a
								className='font-weight-bold footer__link'
								href='https://dilkashshaikhmahajan.herokuapp.com/'
								target='_dilkash'>
								{' '}
								Dilkash Shaikh Mahajan
							</a>
							. It's free to all. If you have any query or
							something please <b>Contact us.</b>
						</p>
					</div>
				</div>
				<div className='col-md-4 mb-3'>
					<div className='card shadow p-3'>
						<img
							className='img-black-thumbnail'
							src='https://res.cloudinary.com/dilkashshaikhmahajan/image/upload/v1620729554/cxbyuavcdsd6gnpwbple.jpg'
							alt='Title'
						/>
						<h4 className='my-2 text-info'>
							Swarajya URL Shortner
						</h4>
						<p className='text-justify'>
							Swaraj URL Shortner is Startup Website which
							deployed by{' '}
							<a
								className='font-weight-bold footer__link'
								href='https://dilkashshaikhmahajan.herokuapp.com/'
								target='_dilkash'>
								{' '}
								Dilkash Shaikh Mahajan
							</a>
							. It's free to all. If you have any query or
							something please <b>Contact us.</b>
						</p>
					</div>
				</div>
				<div className='col-md-4 mb-3'>
					<div className='card shadow p-3'>
						<img
							className='img-black-thumbnail'
							src='https://res.cloudinary.com/dilkashshaikhmahajan/image/upload/v1620729554/cxbyuavcdsd6gnpwbple.jpg'
							alt='Title'
						/>
						<small>It's Under Construction</small>
						<h4 className='my-2 text-info'>Swarajya Weather</h4>
						<p className='text-justify'>
							Swaraj Weather is Startup Website which deployed by{' '}
							<a
								className='font-weight-bold footer__link'
								href='https://dilkashshaikhmahajan.herokuapp.com/'
								target='_dilkash'>
								{' '}
								Dilkash Shaikh Mahajan
							</a>
							.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
