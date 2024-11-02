import Contactlist from "./Contactlist"
import Education from "./Education"
import Expertlist from "./Expertlist"
import NameAndProfile from "./NameAndProfile"
import Work from "./Work"
import Language from "./Languagelist"
import Reference from "./Reference"

function Cvpaper(){
    return(
        <div className="CV_paper">
         <div className="backdrop"></div>
         <div className="contents">
            <div className="left_panel">
                <img src="https://static.vecteezy.com/system/resources/previews/003/715/527/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg" alt="" />
                <Contactlist tel={"080"} email={"gg "} website={"www.com"} address={"sangkha"}/>
                <Education/>
                <Expertlist/>
                <Language/>
                
            </div>
            <div className="right_panel">
                <NameAndProfile name={"OLIVIA RODIGO"} profession={"Graphics Designer"}
                profile={"Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum"}/>
                <Work/>
                <Reference/>
            </div>
         </div>
        </div>
    )
}


function Previewtab() {
  return (
    <div className="preview_tab">
        <Cvpaper/>
    </div>
  )
}

export default Previewtab