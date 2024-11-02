function Refperson({name,cop,role,phone,email}){
    return(<div className="ref_person">
        <h3>{name}</h3>
        <h6>{cop} / {role}</h6>
        <p><b>Phone:</b> {phone}</p>
        <p><b>Email:</b> {email}</p>
        </div>)
    
}

function Reference() {
  return (
    <div  className="ref_rebel">
        <i className="fa-solid fa-book-bookmark"></i>
        <h4>References</h4>
        <div className="ref_list">
        <Refperson name={"Bailey Dupont"} cop={"Wardiere inc."} role={"CEO"} phone={"123-456-7890"} email={"hello@gmail.com"}/>
        <Refperson name={"Bailey Dupont"} cop={"Wardiere inc."} role={"CEO"} phone={"123-456-7890"} email={"hello@gmail.com"}/>
        </div>
        
    </div>
  )
}

export default Reference