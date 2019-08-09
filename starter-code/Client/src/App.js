import React, { Component } from 'react';
import './App.css'; 

import Home from './Components/Home';
import Countries from './Components/Countries';
import CountryDetails from './Components/CountryDetails';

import {Route} from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      countries: []
    }
  }

  componentDidMount() {
    axios.get("http://countries.tech-savvy.tech/countries")
    .then(response => {
      this.setState({countries: response.data})
    })
  }


  render() {
    return (
      <div className="App">
        <Countries />
        <Route exact path="/" component={Home} />
        <Route path="/details/:id" component={CountryDetails} />
      </div>
    );
  }

}

export default App;
