import React, { useState } from 'react';
import Helmet from 'react-helmet';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import {
	FaFacebook,
	FaInstagram,
	FaTwitterSquare,
	FaTelegram,
	FaLinkedin,
} from 'react-icons/fa';
const Contact = () => {
	const backend = 'https://swarajya-blog-website.herokuapp.com';
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [loader, setloader] = useState(false);
	const formHandle = async (e) => {
		e.preventDefault();
		setloader(true);
		if (!name) {
			toast.error('Name is required');
		} else if (!email) {
			toast.error('Email is required');
		} else if (!subject) {
			toast.error('Subject is required');
		} else if (!message) {
			toast.error('Message is required');
		} else {
			let fileObject = {
				name,
				email,
				subject,
				message,
			};
			// console.log(fileObject);
			const { data } = await axios.post(
				`${backend}/setContact`,
				fileObject,
			);
			console.log(data);
			toast.success(data.msg);
			setloader(false);
			setName('');
			setEmail('');
			setSubject('');
			setMessage('');
		}
	};
	return (
		<div className='container'>
			<Helmet>
				<title>Contact Us | Swarajya Blog Website</title>
				<meta
					name='description'
					content='Contact Us | Swarajya Blog Website'
				/>
			</Helmet>
			<Toaster
				position='top-center'
				reverseOrder={false}
				toastOptions={{
					style: {
						fontSize: '14px',
					},
				}}
			/>
			<div className='row  my-3'>
				<div className='col-md-12 mx-auto'>
					<div className='card shadow p-4'>
						<p className='text-capitalize text-justify'>
							I Love Hearing from and communicating with visitors
							to my site! However, with several businesses to run
							myself, side projects, and private coaching.
						</p>
						<h2 className='mt-3'>Web Development Questions</h2>
						<p className='text-capitalize'>
							So, if you have any question related to web
							development, i'd like you to consider join my web
							development group in <b>telegram </b> (Link Given
							Below) and ask a question there
						</p>
						<h2 className='mt-3'>Project Related Inquires</h2>
						<p className='text-capitalize'>
							However, if you are looking to hire me or have
							anything else that you need to ask in private feel
							free to use the form below.
						</p>
						<div className='row'>
							<div className='col-md-8'>
								<form autoComplete='off' onSubmit={formHandle}>
									<div className='form-row'>
										<div className='col-md-5'>
											<label>
												Your Name{' '}
												<span className='text-danger'>
													*
												</span>
											</label>
											<div className='form-group'>
												<input
													type='text'
													className='form-control'
													value={name}
													onChange={(e) =>
														setName(e.target.value)
													}
												/>
											</div>
										</div>
										<div className='col-md-1'></div>
										<div className='col-md-6'>
											<label>
												Your Email Id{' '}
												<span className='text-danger'>
													*
												</span>
											</label>
											<div className='form-group'>
												<input
													type='email'
													className='form-control'
													value={email}
													onChange={(e) =>
														setEmail(e.target.value)
													}
												/>
											</div>
										</div>
									</div>
									<div className='form-group'>
										<label>
											Subject
											<span className='text-danger'>
												*
											</span>
										</label>
										<input
											type='text'
											className='form-control'
											value={subject}
											onChange={(e) =>
												setSubject(e.target.value)
											}
										/>
									</div>
									<div className='form-group'>
										<label>
											Message
											<span className='text-danger'>
												*
											</span>
										</label>
										<input
											type='text'
											className='form-control'
											value={message}
											onChange={(e) =>
												setMessage(e.target.value)
											}
										/>
									</div>
									<div className='d-flex justify-content-center'>
										<button
											type='submit'
											className='btn px-5  btn-outline-info'>
											{loader ? (
												<div
													className='spinner-grow'
													role='status'>
													<span className='sr-only'>
														Loading...
													</span>
												</div>
											) : (
												'Submit'
											)}
										</button>
									</div>
								</form>
							</div>
							<div className='col-md-4 mt-4 contact__div__mobile'>
								<span className='font-weight-bold'>
									Contact Number:{' '}
								</span>
								<a
									href='tel: 9325696751'
									className='contact__no__link'>
									{' '}
									9325696751
								</a>
								<br />
								<span className='font-weight-bold'>
									Address:-{' '}
								</span>{' '}
								At: Saoner Mohpa Road, Kanyadhol, Nagpur -
								441502
							</div>
						</div>
					</div>
					<div className='card shadow my-2 d-flex justify-content-center'>
						<ul className='nav mt-3 justify-content-center text-dark'>
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
						{/* <p className='d-flex mt-2 justify-content-center'> */}
						<p className=' my-2 text__footer'>
							<a
								href='https://rzp.io/l/UuYENHPrZ'
								className='btn btn-outline-info'
								style={{ marginRight: '10px' }}
								target='_dilkash'>
								Donate for Server
							</a>{' '}
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

export default Contact;
