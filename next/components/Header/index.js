import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Head = styled.header`
	width: 100%;
	box-shadow: rgb(0, 0, 0) 0px 5px 20px -10px;
	padding-bottom: 5px;
	background-color: rgb(255, 255, 255);
	height: 86.11px;
	position: fixed;
	z-index: 100;
`;

const Header = () => (
	<Head>
		   <div className="dt">
			   <ul className="list-clear">
				   <li><a href="/counselling.html">Counselling</a></li>
				   <li><a href="/hypnotherapy.html">Hypnotherapy</a></li>
				   <li className="sub-nav"><a href="#">Workshops</a>
					   <div className="hidden-sub">
						   <a href="/relaxation.html">Relaxation</a>
						   <a href="/workshops.html">Workshops</a>
					   </div>
				   </li>
				   <li className="logo-container">
					   <a href="/"><img src="/assets/img/logo.jpg" alt="logo" /></a>
				   </li>
				   <li><a href="/shop.html">Shop/Free Stuff</a></li>
				   <li><a href="/prices.html">Contact/Prices</a></li>
				   <li><a href="/blog.html">Blogs</a></li>
			   </ul>
		   </div>
		   <div className="mobile-wrapper">
			   <div className="tm">
				   <ul className="list-clear">
					   <li className="logo-container">
						   <a href="http://www.bluebell-therapy.co.uk"><img src="/assets/img/logo.jpg" alt="logo" /></a>
					   </li>
					   <li className="fr">
						   <div id="nav-icon1">
							   <span></span>
							   <span></span>
							   <span></span>
						   </div>
					   </li>
				   </ul>
			   </div>
		   </div>
	   </Head>
);

export default Header;
