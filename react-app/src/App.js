import React, { Component } from "react";
import Navigation from './Components/Navigation'
import LogInForm from './Components/LogInForm'

export default class App extends Component {
  render(){
    return (
      <div>
        <LogInForm/>
        <Navigation/>
      </div>
    )
  }
}
