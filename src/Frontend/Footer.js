import React from 'react';

const Footer = () => {
	return (
		<footer class='px-2 lg:px-8 bg-neutral text-neutral-content'>
			<div class="footer">
				<div class="py-2">
					<span class='footer-title text-lg'>Services</span>
					<a class='link link-hover'>Branding</a>
					<a class='link link-hover'>Design</a>
					<a class='link link-hover'>Marketing</a>
					<a class='link link-hover'>Advertisement</a>
				</div>
				<div class="py-2">
					<span class='footer-title text-lg'>Company</span>
					<a class='link link-hover'>About us</a>
					<a class='link link-hover'>Contact</a>
					<a class='link link-hover'>Jobs</a>
					<a class='link link-hover'>Press kit</a>
				</div>
				<div class="py-2">
					<span class='footer-title text-lg'>Legal</span>
					<a class='link link-hover'>Terms of use</a>
					<a class='link link-hover'>Privacy policy</a>
					<a class='link link-hover'>Cookie policy</a>
				</div>
				<div class="py-2">
					<span class='footer-title text-lg'>Links</span>
					<a class='link link-hover'>Terms of use</a>
					<a class='link link-hover'>Privacy policy</a>
					<a class='link link-hover'>Cookie policy</a>
				</div>
			</div>
			<div class="text-center py-2">
				<p>All right reserved by &copy; 2022</p>
			</div>
		</footer>

	);
};

export default Footer;