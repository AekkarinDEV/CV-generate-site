import { useContext} from "react"
import { AppContext } from "../App"



function Sidetab() {
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
  
  return (
      <div className="side_tab">
      <form action="">
        <label htmlFor="user_name">Your name :</label>
        <input type="text" id="user_name" placeholder="bob johnson" onChange={nameChange}/>
        <label htmlFor="user_role">profession:</label>
        <input type="text" id="user_role" placeholder="graphic designer" onChange={roleChange}/>
        <label htmlFor="user_profile">profession:</label>
        <textarea id="user_profile" onChange={profileChange}/>
      </form>
    </div>
    
  )
}

export default Sidetab 