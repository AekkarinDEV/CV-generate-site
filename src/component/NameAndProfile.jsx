
function NameAndProfile({name, profession, profile}) {
  return (
    <div className="NandP">
        <h1>{name}</h1>
        <h4>{profession}</h4>
        <i className="fa-regular fa-user"></i>
        <h3> Profile</h3>
        <p>{profile}</p>
    </div>
  )
}

export default NameAndProfile