import React, { Component } from 'react'
import homeImage from '../assets/homeimage.png'
import petImage from '../assets/pet.png'
import fitnessImage from '../assets/fitness-center.png'
import patioImage from '../assets/patio.png'
import applianceImage from '../assets/appliances.png'
import wifiImage from '../assets/wifi.png'

class Home extends Component {
    render(){
        return(
            <>
            <div className="container-home">
             <img
                src={homeImage}
                alt="vertical forest apartments in Milan"
                className="home-image"
             />
             <div className="home-body">
                 <h1 className="home-header">Tree House Apartments</h1>
                 <br/>
                 <div className="home-row">
                     <div className="home-column">
                     <img src={petImage}alt="Pet Friendly icon" className="home-icons"/>
                     </div>
                     <div className="home-column">
                     <img src={fitnessImage}alt="Fitness Center icon" className="home-icons"/>
                     </div>
                     <div className="home-column">
                     <img src={patioImage}alt="Patio and Balcony icon" className="home-icons"/>
                     </div>
                     <div className="home-column">
                     <img src={applianceImage}alt="Stainless Steel Appliances icon" className="home-icons"/>
                     </div>
                     <div className="home-column">
                     <img src={wifiImage}alt="wifi icon" className="home-icons"/>
                     </div>
                 </div>
                 <h4 className="home-text">Elevate your life with the ideal blend of urban convenience and sustainable living.</h4>
             </div>
             </div>
            </>
        ) 
    }
    
}

export default Home