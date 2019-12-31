import React, { Fragment } from 'react';
import LayoutHead from './Head';
import Header from './Header/index';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
	<Fragment>
		<LayoutHead />
		<div style={layoutStyle}>
			<Header />
			{props.children}
		</div>
	</Fragment>
);

export default Layout;
