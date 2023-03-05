import React, { useContext } from 'react';
import { NavContext } from './NavContext';


const NavLink = (props) => {
	const {activeNavLinkId, setActiveNavLinkId} = useContext(NavContext);

	const handleClick = () => {
		setActiveNavLinkId(props.navLinkId);
		document.getElementById(props.scrollToId).scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<span
			id={props.navLinkId}
			className={activeNavLinkId === props.navLinkId ? 'activeClass' : ''}
			onClick={handleClick}
            style={{fontFamily: 'Varela', fontSize: '25px', fontWeight: 'inherit', marginLeft: '100px'}}
		>
			{props.navLinkId}
		</span>
	);
};
export default NavLink;
