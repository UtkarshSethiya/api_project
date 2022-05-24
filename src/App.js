
import './App.css';
import { useState,useEffect } from 'react';

import Card from './Card';


function App() {

  const[list,setlist]=useState([])
  useEffect(()=>{
    fetch("https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results= 20")
    .then(response=>{
      return response.json();
    }).then(
      data=>{
  
        setlist(data.results);
      }
    ) .catch(error => {
      console.log(error)
    })
  }
  ,[]
  )

  console.log(list)
const[select,setselect]=useState(null);
const[popup,setspopup]=useState(false);

console.log(select)


  return (
    <div className='container-md' >
      <pre></pre>  <pre></pre> 
   {popup && <Card select={select}/>}  
   <pre></pre>  <pre></pre>  <pre></pre>  <pre></pre>  <pre></pre>  <pre></pre> 
     <div className='row'>
      {
      list && list.map((doc)=>{
      
           return <div className='col-lg-3 cont '>
             
         
             <div className='cards'  key={doc.id} onClick={(e)=>{setselect(doc);setspopup(true)} } >
               <button className='click '>
               <span className='gender'>{doc.gender.toUpperCase()}-NL</span><br></br>
               <span className='name'>{doc.name.title} {doc.name.first} {doc.name.last}</span><br></br>
               <span className='email'>{doc.email}</span>
               </button>
             </div><pre></pre>
             
            
           </div>
         }

         )
        
        }

</div>
    </div>
  );
}

export default App;
