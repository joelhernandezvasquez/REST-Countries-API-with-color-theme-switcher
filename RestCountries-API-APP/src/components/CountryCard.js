import React from 'react';


const CountryCard = ({country}) =>{
    
  
  
  return(
  
    

      <div className="card shadow">
       <div className="flag-container">
          <img src={country.flag}  alt={country.name}/>
         </div>
       <div className="card-info">
       <h1>{country.name}</h1>
       <h3> Population:<span>{country.population}</span></h3>
       <h3> Region:<span> {country.region}</span></h3>
       <h3>Capital:<span>{country.capital}</span></h3>
       </div>
      
   </div>
    
     
    )
}

export default CountryCard;