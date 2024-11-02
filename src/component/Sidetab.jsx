import { useContext } from "react"
import { AppContect} from "../App"

function Sidetab() {
  const context = useContext(AppContect)
  const listenChange = () =>{
    context.setUsername(context.username = document.getElementById("user_name").value)
  }
  return (
    <div className="side_tab">
      <form action="">
        <label htmlFor="user_name">Your name :</label>
        <input type="text" id="user_name" placeholder="bob johnson" onChange={listenChange}/>
        <label htmlFor="user_role">profession:</label>
        <input type="text" id="user_role" placeholder="graphic designer"/>
      </form>
    </div>
  )
}

export default Sidetab 