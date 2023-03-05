import React from 'react';
import { useNav } from '../customHooks/useNav';
import Slideshow from './Slideshow';
import './Page.css';

const What = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement
	const whatRef = useNav('What');
    

	return (
		<section ref={whatRef}  id='whatContainer'> 
            <div style={{width: "50%"}}>    
                <Slideshow />
            </div>
			<div className='section_div'>
				<h3>COSA FACCIAMO</h3>
				<ul style={{fontFamily: "Varela", fontSize: "20pt"}}>
                    <li>Fisioterapia e riabilitazione post trauma</li>
                    <li>Logopedia</li>
                    <li>Alimentazione</li>
                    <li>Cardiologia</li>
                </ul>
			</div>
		</section>
	);
};
export default What;