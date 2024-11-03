
import Basicinput from "./inputField/Basicinput"
import Eduinput from "./inputField/Eduinput"
import Expinput from "./inputField/Expinput"
import Languageinput from "./inputField/Languageinput"
import Workinput from "./inputField/Workinput"
import Refinput from "./inputField/Refinput"



function Sidetab() {
 
  return (
      <div className="side_tab">
      <Basicinput/>
      <Eduinput/>
      <Expinput/>
      <Languageinput/>
      <Workinput/>
      <Refinput/>
      <div className="b">l</div>
    </div>
    
  )
}

export default Sidetab 