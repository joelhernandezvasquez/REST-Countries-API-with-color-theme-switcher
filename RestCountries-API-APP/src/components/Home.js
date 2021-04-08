import React , { useEffect,useState } from 'react';
import SearchBar from './SearchBar';
import Dropdown from './Dropdown';
import CountriesList from './CountriesList';
import axios from 'axios';
import '../sass/style.scss';

const Home = ({darkMode}) =>{
    const [term,setTerm] = useState('');
    const [selectedRegion,setSelectedRegion] = useState('Filter By Region')
    const [countries,setCountries] = useState([]);
   
    const regionOptions = ['Africa','Americas','Asia','Europe','Oceania'];

    const searchCountries = async () =>{
     
        try
        {
        const {data} = await axios.get(`https://restcountries.eu/rest/v2/name/${term}`)
        setCountries(data);
    
        }
       catch(err)
       {
        console.log(err);
       }
      }

      const searchAllCountries = async ()=>{
        try{
          const {data} = await  axios.get('https://restcountries.eu/rest/v2/all')
           setCountries(data);
        }
        catch(err)
        {
          console.log(err);
        }
       
    }

    const filterByRegion = async ()=>{
        try{
          const {data} = await  axios.get(`https://restcountries.eu/rest/v2/region/${selectedRegion}`)
      
          setCountries(data);
        }
        catch(err)
        {
          console.log(err);
        }
       
      }

      useEffect(()=>{
        searchAllCountries();
      

        if(darkMode)
        {
          document.querySelector(".form-container").classList.add("dark-mode");
          document.querySelector(".dropdown").classList.add("dark-mode");
         document.querySelector(".country-container").classList.add("dark-mode");
         return;
         
        }
       
         document.querySelector(".form-container").classList.remove("dark-mode");
        document.querySelector(".dropdown").classList.remove("dark-mode");
       document.querySelector(".country-container").classList.remove("dark-mode"); 

       },[darkMode])

       useEffect(()=>{

        if(term && selectedRegion==='Filter By Region')
        {
          searchCountries();
           return; 
    
        }
        if(!term && selectedRegion!=='Filter By Region')
        {
          filterByRegion();
           return;  
        }
    
        if(term && selectedRegion!=='Filter By Region' )
        {
           searchCountries();
          return;
        }
        
       
        },[term,selectedRegion])


   return(
       <div className="wrapper container">
         <SearchBar 
            term = {term}
            onSubmitSearch = {setTerm} />
             
             <Dropdown
              options = {regionOptions}
              selected = {selectedRegion}
              onChangeRegion = {setSelectedRegion}

            />

             <CountriesList countries = {countries}/>
            
       </div>
   )
}
export default Home;