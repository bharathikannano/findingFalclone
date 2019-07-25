import React, {Component} from 'react';
import './App.css';

class StoryModal extends Component{
	
	constructor(props) {
		super(props)
	}
	
render(){

		return(
		
				<div id="storyModal" className="overlay modal">

				<div className="modal-content">

					<span onClick={this.props.close} className="close">&times;</span>
					<img className= "eagle-logo" src="Eagle.JPG" alt="Italian Trulli"/>
					<div className="story-content">
					
					<p>Our problem is set in the planet of Lengaburu…in the distant
						distant galaxy of Tara B.</p>
						
						<p> After the recent war with neighbouring
						planet Falicornia, King Shan has exiled the Queen of Falicornia
						for 15 years.</p>
						<p>
						Queen Al Falcone is now in hiding.</p>
						<p> But if King Shan can find
						her before the years are up, she will be exiled for another 15
						years….</p>
					<p>
						King Shan has received intelligence that Al Falcone is in hiding in one of these 6 planets - DonLon, Enchai, Jebing,
						Sapir, Lerbin & Pingasor. However he has limited resources at his disposal & can send his army to only 4 of these
					planets.</p>
					
					</div>
				</div>
			</div>
			);
		}
		
}

export default StoryModal;