import React from 'react';
import Nav from './components/nav/Nav'
import Main from './components/pages/Main';
import NavProvider from './components/nav/NavContext';
import './App.css';

function App() {
	return (
		<div className='appContainer'>
			<NavProvider>
				<Nav />
				<Main />
			</NavProvider>
		</div>
	);
}

export default App;