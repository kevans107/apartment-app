# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## Apartment Model Structure 
rails g resource Apartment street:string city:string state:string manager:string email:string price:string bedrooms:integer bathrooms:float pets:string user_id:integer

# Building Components
- boiler plate
```javascript
import React, { Component } from 'react'

class App extends Component{
  render(){
    return(
      <>
        <h1>A Basic Class Component</h1>
      </>
    )
  }
}

export default App
```
- import Component.js into App.js 

# Adding Apartments to Apartment
- Add mock data to the seeds.rb folder
- $ rails db:seed to add data to the database

# Testing 
- $ yarn add jest
    - create testing in javascript folder pageName.test.js
    - run yarn jest to test, fail, and then create the test to pass
- $ yarn add -D enzyme react-test-renderer enzyme-adapter-react-16
    - rpsec/requests/apartments_spec.rb
        - test to return all the apartments

# Q's for Sarah
- importing the stylesheet for bootstrap into index.js?
- tried importing into application.scss
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous" />


# To Do
 - Modify devise to have header and footer on sign up / sign in pages
 - default value in edit form
 - styling forms