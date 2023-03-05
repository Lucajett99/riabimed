import React from 'react';
import riabimed from '../../images/riabimed.jpg';
import riabimed_logo from '../../images/riabimed_logo.png';
import { useNav } from '../customHooks/useNav';
import './Page.css';

const Home = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const homeRef = useNav('Home');

	return (
		<section ref={homeRef} id='homeContainer' style ={ { backgroundImage:  `url(${riabimed})`, backgroundSize: '100% 100%' } }>
            <div className="section_div" style={{backgroundColor: 'rgba(255,255,255,0.8)', height: '100%'}}>
                <img src={riabimed_logo}/>
            </div>			
		</section>
	);
};

export default Home;