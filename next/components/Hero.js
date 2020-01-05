import React from 'react'
import styled from 'styled-components';

const Hero = () => {

	const HeroStyled = styled.div`
		background: url(assets/img/bluebell.jpg) no-repeat right top;
		background-size: cover;
		height: 100vh;
		width: 100%;
		color: #fff;
		padding: 150px 5px 0 5px;
	`;

	return (
        <HeroStyled className="text-center">
            <h1>Bluebell Therapy</h1>
            <h5>Judith Mason</h5>
            <p>
                A Nottingham based caring and confidential Counselling and Hypnotherapy service.
            </p>
            <div className="hero-button">
                <h3>Find out more about</h3>
                <a className="button button-white button-center" href="/hypnotherapy.html">Hypnotherapy</a>
                <a className="button button-white button-center" href="/counselling.html">Counselling</a>
                <a className="button button-white button-center" href="/workshops.html">Workshops</a>
            </div>
        </HeroStyled>
	)
}

export default Hero;
