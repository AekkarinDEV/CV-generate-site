function Passjob({coperate,role,description,start,end}){
    const printDescript = (scriptlist) => {
        return(
            scriptlist.map((des) => (<li key={des}>{des}</li>))
        )
    }
    return(
        <div className="jobs">
            <div className="job_duration">
                <p>{start}</p>
                <p>-</p>
                <p>{end}</p>
            </div>
            <div className="job_inform">
                <h4>{coperate}</h4>
                <p>{role}</p>
                <ul>
                    {printDescript(description)}
                </ul>
            </div>
        </div>
    )
}

function Work() {
  return (
    <div className="work_lebel">
        <i className="fa-solid fa-briefcase"></i>
        <h4>Work Experience</h4>
        <Passjob coperate={"Ginyard international"} role={"Product design manager"} start={2012} end={2016}
        description={["working with wider development team" , "Manage website design ,content and SEO marketing branding and logo design"]}/>
        <Passjob coperate={"Ginyard international"} role={"Product design manager"} start={2012} end={2016}
        description={["working with wider development team" , "Manage website design ,content and SEO marketing branding and logo design"]}/>
        <Passjob coperate={"Ginyard international"} role={"Product design manager"} start={2012} end={2016}
        description={["working with wider development team" , "Manage website design ,content and SEO marketing branding and logo design"]}/>
    </div>
  )
}

export default Work