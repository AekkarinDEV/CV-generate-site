import { useContext} from "react"
import { AppContext } from "../App";

function NameAndProfile() {
 const contect = useContext(AppContext);
  return (
    <div className="NandP">
        <h1>{contect.forNandP.name}</h1>
        <h4>{contect.forNandP.role}</h4>
        <i className="fa-regular fa-user"></i>
        <h3> Profile</h3>
        <p>{contect.forNandP.profile}</p>
    </div>
  )
}

export default NameAndProfile