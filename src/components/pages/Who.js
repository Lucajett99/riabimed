import React from 'react';
import { useNav } from '../customHooks/useNav';
import chi_siamo from '../../images/chi_siamo.jpg';
import './Page.css';

const Who = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const contactRef = useNav('Who');

	return (
		<section ref={contactRef} id='whoContainer'>
			    <img id='who_image' src={chi_siamo} />
			<div className="section_div">
				<h3>CHI SIAMO</h3>
				<p>This is the who section</p>
			</div>
		</section>
	);
};

export default Who;