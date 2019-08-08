import React from 'react';
import '../css/Countries.css';
import myCountries from '../countries.json';
import {Link} from 'react-router-dom';

export default function Countries() {
  return (

    <div className="Countries-container">
      <h3>Countries</h3>

      {myCountries.map((country)=> {

        return(

          <div className="Country-container">

            <Link to={`/details/${country.cca3}`}>
              <div className="single-country" key={country.id}>
                <p>{country.flag.normalize()}</p>
                <h4>{country.name.common}</h4>
              </div>
            </Link>
            
          </div>
        )

      })
    }
    </div>

  )
}
