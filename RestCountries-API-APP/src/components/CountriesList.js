import React from 'react';
import CountryCard from './CountryCard';
import {Link} from 'react-router-dom';


const CountriesList = ({countries})=>{
   
    return(
        
        <div className="country-container">
          
           { countries.map((country=>{
              return (
                 
                
                   <Link to={{
                       pathname:'/detail',
                       countryInfo:{
                           country:country
                       }
                   }}>
                      <CountryCard key={country.name} country = {country}></CountryCard>
                   </Link>
              )
          }))}
        </div>
    )
}

export default CountriesList;