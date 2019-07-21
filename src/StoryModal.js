import React, {Component} from 'react';
import './App.css';

class StoryModal extends Component{
	
	constructor(props) {
		super(props)
		this.state ={
		show:null,
		}
	}
	/*
	<div>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h3>Modal Header</h3>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                <div className="modal-body">
                    <p>
                        {props.children}
                    </p>
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={props.close}>CLOSE</button>
                    <button className="btn-continue">CONTINUE</button>
                </div>
            </div>
        </div>
		*/
	
render(){

		return(
		
				<div id="storyModal" style={{display: this.props.show ? 'block' : 'none' }} style={{
                    transform: this.props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }} className="overlay modal">

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