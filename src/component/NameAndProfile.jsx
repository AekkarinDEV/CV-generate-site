import { useContext, useState } from "react"
import { AppContect } from "../App"

function NameAndProfile({name, profession, profile}) {
 const contect = useContext(AppContect);

  return (
    <div className="NandP">
        <h1>{contect.username}</h1>
        <h4>{profession}</h4>
        <i className="fa-regular fa-user"></i>
        <h3> Profile</h3>
        <p>{profile}</p>
    </div>
  )
}

export default NameAndProfile