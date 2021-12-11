import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { faHome, faCity, faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ProtectedIndex extends Component {
    render() {
        const { apartments } = this.props
        return (
            <div className="my-apartments">
            <h1>My Listings</h1>
            <br />
            <br />
            <article className="cards">
                {apartments.length > 0 && apartments.map
                (apartment => {
                    return (
                        <section key={apartment.id}
                        className="card">
                        <div>
													<FontAwesomeIcon icon={faHome} className="fa-icon" />
														{apartment.street}
												</div>
												<div>
													<FontAwesomeIcon icon={faCity} className="fa-icon" />
													{apartment.city}, {apartment.state}
												</div>
												<div>
													<FontAwesomeIcon icon={faPaw} className="fa-icon" />
													{apartment.pets}
												</div>
												<br />
												<NavLink to={`/apartmentshow/${apartment.id}`}>
													<Button className="button">
														Delete Listing
													</Button>
												</NavLink>
												</section>
                    )
                })}
            </article>
                
            </div>
        )
    }
}

export default ProtectedIndex