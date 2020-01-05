import React from 'react';
import Head from 'next/head'

const LayoutHead = props => {

	const { title } = props;

	return (
		<Head>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="stylesheet" href="/assets/css/main.css" />
			<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic" />
			<link rel="stylesheet" href="/assets/css/milligram.min.css" />
			<link rel="shortcut icon" href="/assets/img/favicon.ico" />
			<title>{title}</title>
		</Head>
	)
};
  
export default LayoutHead;
