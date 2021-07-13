import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
	FaFacebook,
	FaInstagram,
	FaTwitterSquare,
	FaTelegram,
	FaLinkedin,
} from 'react-icons/fa';
import axios from 'axios';
import Header from './Header';
import Project from './Project';
import URL from './URL';

const Home = () => {
	const [numberOfUrl, setNumberOfUrl] = useState(0);
	useEffect(() => {
		let backend = `https://swarajyaus.herokuapp.com/`;
		axios
			.get(`${backend}/getURLData`)
			.then((data) => {
				setNumberOfUrl(data.data);
			})
			.catch((err) => {
				console.log(`ger url data is${err}`);
			});
	}, [numberOfUrl]);
	return (
		<div>
			<>
				<Header />
				<Project />
				<URL numberOfUrl={numberOfUrl} />

				<div className='card  shadow my-1 py-2 d-flex justify-content-center'>
					<ul className='nav mt-1 justify-content-center text-dark'>
						<li className='nav-item'>
							<Link className='nav-link' to='/'>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/about'>
								About Us
							</Link>
						</li>

						<li className='nav-item'>
							<a
								href='https://www.linkedin.com/in/dilkash-shaikh-mahajan'
								target='_dilkash'
								className='nav-link'>
								<FaLinkedin />
							</a>
						</li>
						<li className='nav-item'>
							<a
								className='nav-link'
								target='_dilkash'
								href='https://www.facebook.com/dilkash.shaikh.mahajan.7'>
								<FaFacebook />
							</a>
						</li>
						<li className='nav-item'>
							<a
								className='nav-link'
								target='_dilkash'
								href='https://www.instagram.com/dilkash_shaikh_mahajan7/'>
								<FaInstagram />
							</a>
						</li>
						<li className='nav-item'>
							<a
								className='nav-link'
								target='_dilkash'
								href='https://twitter.com/dilkashmahajan7'>
								<FaTwitterSquare />
							</a>
						</li>
						<li className='nav-item'>
							<a
								className='nav-link'
								target='_dilkash'
								href='https://telegram.me/bythe_developer_forthe_develoer'>
								<FaTelegram />
							</a>
						</li>
					</ul>
					<p className='text__footer my-1 '>
						{' '}
						Copyright &copy;
						<a
							className='ml-3 footer__link'
							href='https://dilkashshaikhmahajan.herokuapp.com/'
							target='_dilkash'>
							{' '}
							Dilkash Shaikh Mahajan
						</a>
					</p>
				</div>
			</>
		</div>
	);
};

export default Home;
