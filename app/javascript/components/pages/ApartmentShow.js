import React, { Component } from 'react'
import { Button, UncontrolledCarousel } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { faUser, faEnvelope, faDollarSign, faBed, faToiletPaper, faPaw } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  livingroom from '../assets/livingroom.png'
import kitchen from '../assets/kitchen.png'
import bedroom from '../assets/bedroom.png'

class ApartmentShow extends Component{

    render(){
        const { apartment } = this.props
        
        console.log({ apartment })
        return(
            <div className="apartment-show">
                <h1>Apartment Details</h1>
                <br />
                {apartment &&
                <div className='apartment-details'>
                <UncontrolledCarousel className='carousel'
                  items={[
                    {
                      key: 1,
                      src: livingroom ,
                    },
                    {
                      key: 2,
                      src: kitchen,
                    },
                    {
                      key: 3,
                      src: bedroom,
                    },
                  ]}
                />
                
              <br />
              <h4>About this Listing:</h4>
              <h5>
                <FontAwesomeIcon icon={faDollarSign} className="fa-icon" />{apartment.price} per month
              </h5>
              <h5>
                <FontAwesomeIcon icon={faBed} className="fa-icon" />Bedrooms: {apartment.bedrooms}
              </h5>
              <h5>
                <FontAwesomeIcon icon={faToiletPaper} className="fa-icon" />Bathrooms: {apartment.bathrooms}
              </h5>
              <h5>
                <FontAwesomeIcon icon={faPaw} className="fa-icon" />Pet Policy: {apartment.pets}
              </h5>
              <br />
              <h4>Manager Info:</h4>
              <h5>
                <FontAwesomeIcon icon={faUser} className="fa-icon" />{apartment.manager}
              </h5>
              <h5>
                <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />{apartment.email}
              </h5>
                <br />
                     <NavLink to="/apartmentindex">
                        <Button className="button">
                         Back to All Listings
                        </Button>
                    </NavLink>
                    </div>
                    
            }
      </div>
      )
    }
  }

  
  export default ApartmentShow