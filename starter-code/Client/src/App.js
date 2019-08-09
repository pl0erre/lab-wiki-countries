import React, { Component } from 'react';
import './App.css'; 

import Home from './Components/Home';
import Countries from './Components/Countries';
import CountryDetails from './Components/CountryDetails';

import {Route} from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      error: null
    }
  }

  componentDidMount() {
    axios.get("http://localhost:3001/countries")
    .then(response => {
      this.setState({countries: response.data})
    })
    .catch((error)=>{
      this.setState({error: error.message})
    })
  }

  render() {
    debugger
    return (
      <div className="App">
        <Countries countriesArr={this.state.countries}/>
        <Route countriesArr={this.state.countries} exact path="/" component={Home} />
        <Route countriesArr={this.state.countries} path="/details/:id" component={CountryDetails} />

      </div>
    );
  }

}

export default App;
