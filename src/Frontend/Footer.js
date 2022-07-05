import React from 'react';

const Footer = () => {
	return (
		<footer className='px-2 lg:px-8 bg-neutral text-neutral-content'>
			<div className="footer">
				<div className="py-2">
					<span className='footer-title text-lg'>Services</span>
					<a className='link link-hover'>Branding</a>
					<a className='link link-hover'>Design</a>
					<a className='link link-hover'>Marketing</a>
					<a className='link link-hover'>Advertisement</a>
				</div>
				<div className="py-2">
					<span className='footer-title text-lg'>Company</span>
					<a className='link link-hover'>About us</a>
					<a className='link link-hover'>Contact</a>
					<a className='link link-hover'>Jobs</a>
					<a className='link link-hover'>Press kit</a>
				</div>
				<div className="py-2">
					<span className='footer-title text-lg'>Legal</span>
					<a className='link link-hover'>Terms of use</a>
					<a className='link link-hover'>Privacy policy</a>
					<a className='link link-hover'>Cookie policy</a>
				</div>
				<div className="py-2">
					<span className='footer-title text-lg'>Links</span>
					<a className='link link-hover'>Terms of use</a>
					<a className='link link-hover'>Privacy policy</a>
					<a className='link link-hover'>Cookie policy</a>
				</div>
			</div>
			<div className="text-center py-2">
				<p>All right reserved by &copy; 2022</p>
			</div>
		</footer>

	);
};

export default Footer;