function Contactlist(props){
    console.log(props);
    let contype = Object.keys(props);
    let conlist = Object.values(props);
    console.log(conlist);
    console.log(contype);
    return(
        <ul className="contact_list">
           {contype.map((type,index)=>{
                if(conlist[index] != ''){
                    switch(type){
                        case 'tel':
                            return (<li key={type}><i className="fa-solid fa-phone"></i><p>{conlist[index]}</p></li>)
                        case 'email':
                            return (<li key={type}><i className="fa-solid fa-envelope"></i><p>{conlist[index]}</p></li>)
                        case 'website':
                            return (<li key={type}><i className="fa-solid fa-laptop"></i><p>{conlist[index]}</p></li>)
                        case 'address':
                            return (<li key={type}><i className="fa-solid fa-location-dot"></i><p>{conlist[index]}</p></li>)
                    }       
                }
           })}
        </ul>
    )
   
} 

export default Contactlist;