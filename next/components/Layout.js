import React, { Fragment } from 'react';
import styled from 'styled-components';
import LayoutHead from './Head';
import Header from './Header/index';

const LayoutStyled = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #DDD;
`;

const Layout = props => (
	<Fragment>
		<LayoutHead />
		<LayoutStyled>
			<Header />
			{props.children}
		</LayoutStyled>
	</Fragment>
);

export default Layout;
