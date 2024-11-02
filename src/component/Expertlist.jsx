function Expert({exp}){
    return(<p>{exp}</p>)
} 

function Expertlist() {
  return (
    <div className="expert_label">
        <h1 className="label_head">Expertise</h1>
        <Expert exp="digital market"/>
        <Expert exp="digital market"/>
        <Expert exp="digital market"/>
        <Expert exp="digital market"/>
    </div>
  )
}

export default Expertlist