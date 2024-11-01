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

function Cvpaper(){
    return(
        <div className="CV_paper">
         <div className="backdrop"></div>
         <div className="contents">
            <div className="left_panel">
                <img src="https://static.vecteezy.com/system/resources/previews/003/715/527/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg" alt="" />
                <Contactlist tel={"080"} email={"gg "} website={"www.com"} address={"sangkha"}/>
            </div>
            <div className="right_panel">
                
            </div>
         </div>
        </div>
    )
}


function Previewtab() {
  return (
    <div className="preview_tab">
        <Cvpaper/>
    </div>
  )
}

export default Previewtab