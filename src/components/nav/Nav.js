import React from 'react';
import NavLink from './NavLink';
import './Nav.css';

const navLinks = [
	{ navLinkId: 'Home', scrollToId: 'homeContainer' },
    { navLinkId: 'Cosa facciamo', scrollToId: 'whatContainer' },
	{ navLinkId: 'Chi siamo', scrollToId: 'whoContainer' },
	{ navLinkId: 'Contatti', scrollToId: 'contactContainer' },
];

const Nav = () => {
	return (
		<nav>
			{navLinks.map(({ navLinkId, scrollToId }, idx) => (
				<NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
			))}
		</nav>
	);
};

export default Nav;