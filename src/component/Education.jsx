import { useContext} from "react"
import { AppContext } from "../App"

function EducationData({facility,school,start,end}){
    return(
        <div className="edu_item">
            <h5>{facility}</h5>
            <h6>{school}</h6>
            <p>{start} - {end}</p>
        </div>
    )
}

function Education() {
  const context = useContext(AppContext)
  return (
    <div className="education_label">
        <h1 className="label_head">Education</h1>
        <EducationData facility={context.education[0].facility} school={context.education[0].school}
        start={context.education[0].start} end={context.education[0].end}/>
    </div>
  )
}

export default Education