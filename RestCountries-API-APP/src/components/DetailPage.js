import React,{useState,useEffect} from 'react';

import {Link} from 'react-router-dom';
import axios from 'axios';


const DetailPage = (props) =>{
   
    const[borders,setBorders] =useState([]);

   
    const city = props.location.countryInfo;
    const bordersBtn = [];
    
    useEffect(()=>{
        
     
        getBordersButton();
        
        if(props.darkMode)
        {
            document.querySelector(".detail-page").classList.toggle("dark-mode");
            return;
        }
        document.querySelector(".detail-page").classList.remove("dark-mode");

       

    },[props.darkMode])   

    
    const getLanguages = () =>{
      
        const languages = city.country.languages.map((language,index) =>{
            return (
                <span style={{margin:"0 0.1rem"}}>{language.name}
                 {index+1 < city.country.languages.length? ",": ""}
                </span>
            )
        })

        return languages;
    }

   const getBordersButton =  async () =>{
     
    const borderNames = city.country.borders.map(async border => { 
        return await getCountryName(border); 
     });

      (await Promise.all(borderNames)).forEach(element=>{ 
        bordersBtn.push(element);
      }) 
     setBorders(bordersBtn);
 
}

    const getCountryName = async(code) => {
       const {data} = await axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`)
      return data;
    }

    const renderedBordersButton = () =>{
         
        const buttons = borders.map(border=>{
            return(
                <Link to={{
                    pathname:'/detail',
                    countryInfo:{
                        country:border
                    }
                }}>
                <button className="primary-btn">{border.name}</button>
                </Link>
            )
        })

        return buttons;
        
    }

    const backHome = () =>{
        props.history.push('/');
        
    }

    const renderBorderCountriesInfo =() =>{
        return (
            
            <div className="parent-border">
            
            <div class="btn-borders-container">   
            <h2>Border Countries:</h2> 
             
             {borders? renderedBordersButton():'' }
            
              </div>
              </div>
            
            
              
        )
    }
    
    return(
        
        <div className="detail-page container">
          
            <button className="primary-btn" id='btn-back-home' onClick={()=> backHome()}>
            <i class="fa fa-long-arrow-left" aria-hidden="true"></i> 
              Back
              </button>
           
        
            

              <div class="wrapper-detail-info">
                  
                  <div class="flag-container">
                    <img src={city.country.flag} className="flag" alt={"Flag"}/>

                    </div>
                  
                  <div className="country-info-container">
                    
                     <div className="country-col-1">
                        <h2> {city.country.name}</h2>
                         <div>
                             <h3>Native Name: <span>{city.country.nativeName}</span></h3>
                             <h3>Population: <span>{city.country.population}</span></h3>
                             <h3>Region: <span>{city.country.region}</span></h3>
                             <h3>Sub Region: <span>{city.country.subregion}</span></h3>
                             <h3>Capital: <span>{city.country.capital}</span></h3>
                         </div>
                     </div>


                     <div className="country-col-2">
                            <h3>Top Level Domain: <span>{city.country.topLevelDomain}</span></h3>
                             <h3>Currencies: <span>{city.country.currencies[0].name}</span></h3>
                             <h3 >Languages: {getLanguages()}</h3>
                     </div>

                     <div className="country-borders">
                        {city.country.borders.length > 0? renderBorderCountriesInfo():'' 
                         }
                     </div>
                  </div>
              </div>

              
        </div>
        
    )
}
export default DetailPage;