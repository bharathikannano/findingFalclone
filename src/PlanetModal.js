import React, {Component} from 'react';
import './App.css';

class PlanetModal extends Component{

render(){
	
    return(
		<div id="planetModal" ref="planetModal" className="overlay modal">
		
			<div className="modal-content">
				<span onClick={this.props.close} className="close">&times;</span>
				<img className= "planet-logo" src="planets.png" alt="Italian Trulli"/>
				
			</div>
		</div>
		);
	}
}

export default PlanetModal;