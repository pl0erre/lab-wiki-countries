import React from 'react';
import '../css/CountryDetails.css';
import myCountries from '../countries.json'
import {Link} from 'react-router-dom';

export default function CountryDetails(props) {

  const getCountry = (id) => {
    let found = myCountries.find(singleCountry => {
      return singleCountry.cca3 === id;
    })
    return found
  }

  const getNeighbors = (borderIDs) => {
    let neighbors = borderIDs.map((neighbor) => {
      return(
        <li>
          <Link to={`/details/${neighbor}`}>{neighbor}</Link>
        </li>
      )
      
    })
    return neighbors
  }

  const params = props.match.params;
  const foundCountry = getCountry(params.id);

  return (
    <div className="single-country-container">
      <h2>{foundCountry.name.common}</h2>
      <h3>Capital: {foundCountry.capital}</h3>
      <h4>Area: {foundCountry.area} m2</h4>
      <ul>
        {getNeighbors(foundCountry.borders)}
      </ul>
      <Link id="back-button" to="/">Go back</Link>
    </div>
  )
}
