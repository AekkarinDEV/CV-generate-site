import { useContext } from "react"
import { AppContext } from "../App"


function Contactlist(){
   const context = useContext(AppContext)
   const conlist = [context.contacts.tel,context.contacts.email,context.contacts.web,context.contacts.locate]
   const contype = ["tel","email","website","address"]
    return(
        <ul className="contact_list">
           {conlist.map((type,index)=>{
                if(type!= ''){
                    switch(contype[index]){
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