import React, {Component} from 'react';
import './App.css';
import StoryModal from './StoryModal';
import PlanetModal from './PlanetModal';
import VehicleModal from './VehicleModal';

class App extends Component{
	
constructor(props,context) {
    super(props,context)
    this.state ={
		showStory:false,
		showPlanet:false,
		showVehicle:false
    }
}	

toggleStoryModal(){
	const show = this.state.showStory;
	this.setState({showStory:!show});
}

togglePlanetModal(){
	const show = this.state.showPlanet;
	this.setState({showPlanet:!show});
}

toggleVehicleModal(){
	const show = this.state.showVehicle;
	this.setState({showVehicle:!show});
}
render(){
	let modal;
	if(this.state.showStory){
		modal = <StoryModal id="storyModal" show={this.state.showStory } close={this.toggleStoryModal.bind(this)} />
	}
	if(this.state.showPlanet){
		modal = <PlanetModal id="planetModal" show={this.state.showPlanet } close={this.togglePlanetModal.bind(this)}/>
	}
	if(this.state.showVehicle){
		modal = <VehicleModal id="vehicleModal" show={this.state.showVehicle } close={this.toggleVehicleModal.bind(this)}/>
	}
			
    return(

        <div className="App-base">
		<div id="BaseDiv" className="mydivclass">
			<div className="headerDiv">
				<label className="float-center" type="label">Finding Falcone</label>
				<button className="float-right" type="button">Sign in</button>
				<button className="float-right" type="button">Sign up</button>
			</div>
			<div className="selectionDiv">
				<button onClick={ () => this.toggleStoryModal()} type="button">Story</button>
				<button onClick={ () => this.togglePlanetModal()} type="button">Planets</button>
				<button onClick={ () => this.toggleVehicleModal()} type="button">Vehicles</button>
			</div>
			<div id="progressDiv" >  
				<button  className="search" type="button">Search!</button>
				<img className= "imgprogress" src="progress.gif" alt="Italian Trulli"/>
			</div>
			{modal}
		</div>
	</div>

    );
    }

}
export default App;