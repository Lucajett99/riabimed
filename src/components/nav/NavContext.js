import React, { useState } from 'react';


export const NavContext = React.createContext(<></>);

const NavProvider = (props) => {
	const [activeNavLinkId, setActiveNavLinkId] = useState('');

	const providerValue = {
		activeNavLinkId,
		setActiveNavLinkId,
	};

	return (
		<NavContext.Provider value={providerValue}>{props.children}</NavContext.Provider>
	);
};

export default NavProvider;