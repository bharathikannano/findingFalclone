import React, {Component} from 'react';
import './App.css';
import modalHandler from './ModalHandler';

class App extends Component{

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
				<button onClick={() => modalHandler('storyModal')} type="button">Story</button>
				
				<button onClick={() => modalHandler('planetModal')} type="button">Planets</button>
				<button onClick={() => modalHandler('vehicleModal')} type="button">Vehicles</button>
			</div>
			<div id="progressDiv" >  
				<button  className="search" type="button">Search!</button>
				<img className= "imgprogress" src="progress.gif" alt="Italian Trulli"/>
			</div>
            <div id="storyModal" className="overlay modal">

			<div className="modal-content">
				<span onClick={() => modalHandler('storyModal')} className="close">&times;</span>
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
		
		<div id="planetModal" className="overlay modal">
		
			<div className="modal-content">
				<span onClick={() => modalHandler('planetModal')} className="close">&times;</span>
				<img className= "planet-logo" src="planets.png" alt="Italian Trulli"/>
				
			</div>
		</div>
		
		<div id="vehicleModal" className="overlay modal">
			
			<div className="modal-content">
				<span onClick={() => modalHandler('vehicleModal')} className="close">&times;</span>
				<img className= "vehicle-logo" src="vehicles.png" alt="Italian Trulli"/>
				
			</div>
        </div>
        </div>
        </div>

    );
    }

}
export default App;