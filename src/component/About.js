import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import {
	FaFacebook,
	FaInstagram,
	FaTwitterSquare,
	FaTelegram,
	FaLinkedin,
} from 'react-icons/fa';
const About = () => {
	return (
		<div className='container'>
			<Helmet>
				<title>About Us | Swarajya Blog Website</title>
				<meta
					name='description'
					content='About Us | Swarajya Blog Website'
				/>
			</Helmet>

			<div className='row  my-3'>
				<div className='col-md-12 mx-auto'>
					<div className='card shadow p-4'>
						<p className='text-justify about__p'>
							<img
								className='float-left about__logo mr-3'
								src={process.env.PUBLIC_URL + '/logo.png'}
								alt='Logo'
							/>
							<h1 className='about__heading'>
								Hi, I'm Dilkash Shaikh Mahajan
							</h1>
							<h3 className='about__position'>
								A MERN Stack Develoepr & Blogger
							</h3>
							I'm 21 years old, a regular guy who comes from a
							India (Kanyadhol, Nagpur). I love little things in
							life and never take myself too seriously. Laughing
							with friends and enjoying life with my family are
							two of my favourite things.
							<br /> <br /> But, that wasn't always true. <br />{' '}
							<br /> Since very young age I have been passionate
							about computers, like any other kid, right? Surely,
							but with one difference. I wanted to know how do
							things work in the background, how all those
							programs are made etc., and I wanted to become a
							programmer. <br />
							<br /> I was sitting all day at my computer and
							trying to find some online books to read/learn more
							about coding because at the time YouTube wasn't like
							now and we didn't have a strong internet connection
							to be able to watch related videos, so the books
							were all we had. <br />
							<br /> As soon as I started looking for books, I've
							realized that if I want to learn more about coding,
							I have to learn the English language first, because
							all those great books are written in English, and
							English is not my native language. <br />
							<br />
							Since I'm passionate about coding (by profession
							software engineer), I've made a decision and started
							this website where We will help other coders in
							different ways. We will be happy to see you in my{' '}
							<a href='https://telegram.me/bythe_developer_forthe_develoer'>
								Telegram Group
							</a>
						</p>
					</div>
					<div className='card shadow my-2 d-flex justify-content-center'>
						<ul className='nav mt-3 justify-content-center text-dark'>
							<li className='nav-item'>
								<Link className='nav-link' to='/'>
									Home
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' to='/contact'>
									Contact Us
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
						<p className=' mt-2 text__footer'>
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
				</div>
			</div>
		</div>
	);
};

export default About;
