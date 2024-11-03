import { useContext } from "react";
import { AppContext } from "../../App"


function Basicinput() {
    const contect = useContext(AppContext)
    const nameChange = () =>{
      contect.setNandP(contect.forNandP = {
        name: document.getElementById("user_name").value,
        role: contect.forNandP.role,
        profile: contect.forNandP.profile
      });
    }
    const roleChange = () =>{
      contect.setNandP(contect.forNandP = {
        name: contect.forNandP.name,
        role: document.getElementById("user_role").value,
        profile: contect.forNandP.profile
      });
    }
    const profileChange = () =>{
      contect.setNandP(contect.forNandP = {
        name: contect.forNandP.name,
        role: contect.forNandP.role,
        profile: document.getElementById("user_profile").value
      });
    }

    const cantactsChange = () => {
      contect.setContact(contect.contacts = {
        tel:document.getElementById("user_tel").value,
        email:document.getElementById("user_email").value,
        web:document.getElementById("user_web").value,
        locate:document.getElementById("user_address").value,
      })
    }
    
  return (
        <form action="" className="basic_input">
            <h1>BASIC INFORMATION</h1>
             <label htmlFor="user_name">Your Name </label>
              <input type="text" id="user_name" placeholder="bob johnson" onChange={nameChange}/>
              <label htmlFor="user_role">Profession</label>
              <input type="text" id="user_role" placeholder="graphic designer" onChange={roleChange}/>
              <label htmlFor="user_profile">Profile</label>
              <textarea id="user_profile" onChange={profileChange} rows={6}/>
              
              
              <div className="contact_input">
                <label htmlFor="user_tel">Phone Number</label>
                <label htmlFor="user_email">Email</label>
                <input type="text" id="user_tel" onChange={cantactsChange}/>
                <input type="text" id="user_email" onChange={cantactsChange}/>
                <label htmlFor="user_web">Your Website</label>
                <label htmlFor="user_adress">Your Address</label>
                <input type="text" id="user_web" onChange={cantactsChange}/>
                <input type="text" id="user_address" onChange={cantactsChange}/>
              </div>
              
        </form>
  )
}

export default Basicinput