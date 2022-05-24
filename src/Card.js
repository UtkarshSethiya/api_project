function Card(select){
    
    return(<div className="box_cont">
        
       <div className="box row ">

           <div className="img_cont col-lg-4  p-1 mt-5 " >
            <img className='img' src={select.select.picture.large}  height='150px' width='150px'></img>
           </div>
     
       <div className="name_cont  col-lg-8 p-1 mt-5 ">
           
 <div className="boxname">
 {select.select.name.title}  {select.select.name.first} {select.select.name.last}
 </div>
 <div className="add">
 {select.select.location.street.number}, {select.select.location.street.name}, {select.select.location.state}, {select.select.location.postcode}
 </div>
 <div className="time">
 {select.select.location.timezone.offset}, {select.select.location.timezone.description}
 </div>
 <div className="gen">
 {select.select.gender.toUpperCase()}
 </div>
 <div className="email2">
 Email- {select.select.email}
 </div>
           
       </div>
       </div>
     
    </div>)
}

export default Card;