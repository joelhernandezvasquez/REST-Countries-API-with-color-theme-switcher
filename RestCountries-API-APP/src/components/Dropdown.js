import React,{useState,useEffect,useRef} from 'react';

const Dropdown = ({options,selected,onChangeRegion}) =>{
 
  const[open,setOpen] = useState(false);
  const ref = useRef();
 
  
   useEffect(()=>{
     document.querySelector("body").addEventListener("click",(event)=>{
      if(ref.current && ref.current.contains(event.target))
       {
         return;
       }
       
       setOpen(false);
     })
   },[])
  
  
  const onChangeItemRegion = (option) =>{
    onChangeRegion(option);
    setOpen(!open);
  }
  
  const renderList = options.map(option=>{
    
    if(option===selected)
    {
      return null;
    }
    return(
    <div className="item" onClick={()=> onChangeItemRegion(option) }>
      <label>{option}</label>
    </div>
    )
    
  })
 
  return(
     <div ref={ref} className="dropdown">
         <div className="dropdown-header shadow" onClick={() => setOpen(!open)}>
           <h3>{selected}</h3>
           <i class="fa fa-chevron-down" aria-hidden="true"></i>
         </div>
         <div className={`dropdown-body shadow ${open? 'visible': ''}`} >
         {renderList}
         </div>
     </div>
 )
}

export default Dropdown;