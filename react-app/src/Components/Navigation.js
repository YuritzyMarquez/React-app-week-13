import React, { Component } from "react";

export default class Navigation extends Component {
  render(){
    return (
      <div>
            <nav id="navUp"  class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="#">React Project</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active text-light" href="#">Link 1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Link 2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Link 3</a>
        </li>
        <li class="nav-item" href="#">
          <a class="nav-link text-light">Link 4</a>
        </li>
      </ul>

    </div>
  </div>
</nav>

      </div>
    )
  }
}