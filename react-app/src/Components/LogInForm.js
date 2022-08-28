import React, { Component } from "react";

export default class LogInForm extends Component {
  render(){
    return (
      <div>
           <h3 id="center" class="formDown">Log In Form</h3>

            <form id="border" class="formDown width centerForm">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input type="email" class="form-control border-success border-dark" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control border-success border-dark" id="exampleInputPassword1"></input>
                </div>
                <  button type="submit" id="buttonCenter" class="btn btn-dark text-light">Submit</button>
                </form>
        </div>
    )
  }
}
