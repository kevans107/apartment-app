import React, { Component } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import ApartmentIndex from './pages/ApartmentIndex'
import CreateAccount from './pages/CreateAccount'
import ApartmentShow from './pages/ApartmentShow'
import ShowTest from './pages/ShowTest'
import ApartmentNew from './pages/ApartmentNew'
import ProtectedIndex from './pages/ProtectedIndex'


import {
  BrowserRouter as  Router,
  Switch,
  Route
} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: [],
      count: 0
    }
  }
  componentDidMount(){
    this.readApartment()
  }

  nextSlide = () => {
    this.setState({count: this.state.count + 1})
  }

  previousSlide = () => {
    this.setState({count: this.state.count - 1}) 
    // need to add a conditional that if the count is zero it stops
  }
 

  readApartment = () => {
    fetch("/apartments")
    .then(response => response.json())
    .then(payload => this.setState({apartments: payload}))
    .catch(errors => console.log("index errors:", errors))
  }
  createApartment = (newApartment) => {
    fetch("/apartments", {
      body: JSON.stringify(newApartment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => {
      if(response.status === 422){
        alert("There is something wrong with your submission.")
      }
      return response.json()
    })
    .then(() => this.readApartment())
    .catch(errors => console.log("create errors:", errors))
  }
  deleteApartment = (id) => {
    fetch(`apartments/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => {
      if(response.status === 422){
        alert("Something went wrong with your delete action.")
      }
      return response.json()
    })
    .then(() => this.readApartment())
    .catch(errors => console.log("delete errors:", errors))
  }
  render() {
    const { apartments } = this.state
    return (
      <Router>
        <Header {...this.props} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route 
          path="/apartmentindex" 
          render={() => <ApartmentIndex apartments={apartments} />}
          />
          <Route path="/apartmentshow/:id" render={ (props) => {
            let id = +props.match.params.id
            let apartment = this.state.apartments.find(a => a.id === id)
            return <ApartmentShow apartment={apartment} />
          }}/>
          {this.props.logged_in &&
            <Route path="/myapartments" render={(props) => {
              let apartments = this.state.apartments.filter(a => a.user_id === this.props.current_user.id)
              return <ProtectedIndex apartments={apartments} deleteApartment={this.deleteApartment} />
            }}/>
          }
          {this.props.logged_in &&
            <Route path="/apartmentnew" render={(props) => {
              return <ApartmentNew createApartment={this.createApartment} current_user={this.props.current_user} />
            }}/>
          }
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/showTest" component={ShowTest} />
        </Switch>
        <Footer {...this.props} />
      </Router>
    )
  }
}
export default App