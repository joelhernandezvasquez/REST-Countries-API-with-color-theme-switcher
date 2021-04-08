import React from 'react';

const SearchBar = ({term,onSubmitSearch}) =>{
    
    return(
        <div className="search-bar container">
            <form className="form-container">
              <i class="fa fa-search" aria-hidden="true"></i> 
             <input type="text" value={term} onChange = {(e)=> onSubmitSearch(e.target.value)} placeholder="Search for a country..."/> 
            </form>
        </div>
    )
}

export default SearchBar;