import React from 'react';
import { NavLink } from 'react-router-dom';
const Menubar = () => {
	return (
		<div>
			<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
				<div className='container'>
					<NavLink className='navbar-brand mr-5' to='/'>
						<img
							src={process.env.PUBLIC_URL + '/logo.png'}
							alt='logo'
						/>
					</NavLink>
					<button
						className='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>

					<div
						className='collapse navbar-collapse'
						id='navbarSupportedContent'>
						<ul className='navbar-nav ml-auto'>
							<li className='nav-item'>
								<NavLink
									className='nav-link mr-5'
									exact
									activeClassName='menu_active'
									to='/'>
									Home
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									activeClassName='menu_active'
									className='nav-link mr-5'
									to='/about'>
									About
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									activeClassName='menu_active'
									className='nav-link mr-5'
									to='/contact'>
									Contact
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Menubar;
