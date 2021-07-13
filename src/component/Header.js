import React, { useState } from 'react';
import { FaRegCopy } from 'react-icons/fa';
import { HiClipboardCopy } from 'react-icons/hi';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
const Header = () => {
	const [longURL, setLongURL] = useState('');
	const [shortURL, setShortURL] = useState('');
	const [copied, setCopied] = useState(false);
	const [loader, setLoader] = useState(false);
	const urlCreator = async (e) => {
		let backend = `https://swarajyaus.herokuapp.com/`;
		e.preventDefault();
		if (!longURL) {
			return toast.error('Please Paste The Long URL');
		}
		setLoader(true);

		const { data } = await axios.post(`${backend}/makeUrl`, { longURL });

		setLoader(false);
		if (data.success) {
			setShortURL(`${backend}/${data.response.shortURL}`);
		} else {
			return toast.error(data.error);
		}
	};
	setTimeout(() => {
		setShortURL('');
		setLongURL('');
	}, 300000000);
	setTimeout(() => {
		setCopied(false);
	}, 5000);
	const copyTolipBoard = () => {
		if (shortURL) {
			return toast.success('Text is Copied to Clipboard.');
		} else {
			setCopied(false);
			return toast.error('You have not short URL');
		}
	};
	return (
		<div className='container header'>
			<Toaster
				position='top-right'
				reverseOrder={false}
				toastOptions={{
					style: {
						fontSize: '14px',
						fontWeight: 'bold',
					},
				}}
			/>
			<div className='row mt-3'>
				<div className='col-md-5'>
					<img
						src='BlogWebsite.jpg'
						className='img-fluid shadow mt-3'
						alt=''
					/>
					<p className='mt-2'>
						Swaraj URL Shortner is Startup Website which deployed by{' '}
						<a
							className='font-weight-bold footer__link'
							href='https://dilkashshaikhmahajan.herokuapp.com/'
							target='_dilkash'>
							{' '}
							Dilkash Shaikh Mahajan
						</a>
						. It's free to all. If you have any query or something
						please <b>Contact us.</b>
					</p>
				</div>

				<div className='col-md-6 marginMedium'>
					<div className='card shadow p-4'>
						<form>
							<div className='form-group'>
								<label>Long URL</label>
								<input
									type='email'
									className='form-control'
									placeholder='Paste or Type your long Url'
									value={longURL}
									onChange={(e) => setLongURL(e.target.value)}
								/>
							</div>
							<button
								type='submit'
								onClick={urlCreator}
								className='btn mb-2 btn-block btn-outline-info'>
								{loader ? 'Please Wait ...' : 'Create'}
							</button>
							<div className='form-group'>
								<label htmlFor=''>Short URL</label>

								<div className='input-group mb-3'>
									<input
										type='text'
										className='form-control'
										placeholder='Short URL'
										value={shortURL}
										readOnly={true}
									/>
									<div className='input-group-append'>
										<CopyToClipboard
											text={shortURL}
											onCopy={() => setCopied(true)}>
											<span
												className='input-group-text copyTolipBoard'
												onClick={copyTolipBoard}>
												{copied ? (
													<HiClipboardCopy />
												) : (
													<FaRegCopy />
												)}
											</span>
										</CopyToClipboard>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
