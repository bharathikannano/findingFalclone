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
	
	this.storyModalCallback = this.modalHandler.bind(this, "storyModal"),
	this.planetModalCallback = this.modalHandler.bind(this, "planetModal"),
	this.vehicleModalCallback = this.modalHandler.bind(this, "vehicleModal")
}	

handleClose(){
	this.setState({show: null});
}
handleShow(id){
	this.setState({show: id});
}
	
	
modalHandler (myModal){

	if(myModal=="storyModal"){
		this.setState({
            showStory: !this.showStory
        });
    }else if(myModal=="planetModal"){
		this.setState({
            showPlanet: !this.showPlanet
        });
    }else if(myModal=="vehicleModal"){
		this.setState({
            showVehicle: !this.showVehicle
        });
    }
}
render(){
	
    return(

        <div className="App-base">
		<div id="BaseDiv" className="mydivclass">
			<div className="headerDiv">
				<label className="float-center" type="label">Finding Falcone</label>
				<button className="float-right" type="button">Sign in</button>
				<button className="float-right" type="button">Sign up</button>
			</div>
			<div className="selectionDiv">
				<button onClick={ () => this.modalHandler("storyModal").bind(this)} type="button">Story</button>
				<button onClick={ () => this.modalHandler("planetModal").bind(this)} type="button">Planets</button>
				<button onClick={ () => this.modalHandler("vehicleModal").bind(this)} type="button">Vehicles</button>
			</div>
			<div id="progressDiv" >  
				<button  className="search" type="button">Search!</button>
				<img className= "imgprogress" src="progress.gif" alt="Italian Trulli"/>
			</div>
			{this.state.isShowing ?	<StoryModal id="storyModal" show={this.state.showStory } close={this.storyModalCallback} />:null}
			<PlanetModal id="planetModal" show={this.state.showPlanet } close={this.planetModalCallback}/>
			<VehicleModal id="vehicleModal" show={this.state.showVehicle } close={this.vehicleModalCallback}/>
		</div>
	</div>

    );
    }

}
export default App;