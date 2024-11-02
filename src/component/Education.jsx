function EducationData({facility, school, start,end}){
    return(
        <div className="edu_item">
            <h5>{facility}</h5>
            <h6>{school}</h6>
            <p>{start} - {end}</p>
        </div>
    )
}

function Education() {
  return (
    <div className="education_label">
        <h1 className="label_head">Education</h1>
        <EducationData facility={"Bacholor of Design"} school={"khonkaen university"}
        start={2008} end={2012}/>
        <EducationData facility={"Bacholor of Design"} school={"khonkaen university"}
        start={2008} end={2012}/>
       
    </div>
  )
}

export default Education