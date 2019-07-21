import React, {Component} from 'react';
import './App.css';

class VehicleModal extends Component{

render(){
	
    return(
		<div id="vehicleModal" ref="vehicleModal" className="overlay modal">
			
			<div className="modal-content">
				<span onClick={this.props.close} className="close">
				&times;
				</span>
				
				<img className= "vehicle-logo" src="vehicles.png" alt="Italian Trulli"/>
				
			</div>
        </div>
		);
	}
}
export default VehicleModal;