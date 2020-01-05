import React, { Fragment } from 'react';
import styled from 'styled-components';
import LayoutHead from './Head';
import Header from './Header/index';

const LayoutStyled = styled.div`
`;

 const Main = styled.div`
	margin: 0;
	padding: 0;
 `;

const Layout = props => (
	<Fragment>
		<LayoutHead title={props.title} />
		<LayoutStyled>
			<Header />
				<Main>
					{props.children}
				</Main>
		</LayoutStyled>
	</Fragment>
);

export default Layout;
