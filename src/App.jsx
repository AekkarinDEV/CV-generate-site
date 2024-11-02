import Sidetab from "./component/Sidetab.jsx"
import Previewtab from "./component/Previewtab.jsx"
import { createContext, useState } from "react"

export const AppContext = createContext()

function App() {
  const [forNandP,setNandP] = useState({
    name: "Olivia",
    role: "Graphic Designer",
    profile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  })

  const[contacts,setContact] = useState({
    tel:"000-000-0000",
    email:"helloworl@gmail.com",
    web:"www.helloworld.com",
    locate:"123 anywhere ST."
  })
  
  return (
    <>
      <AppContext.Provider value={{
        forNandP,setNandP,
        contacts,setContact,


        
        }}>
        <ul className="container">
          <li key={"preview_tab "}><Previewtab/></li>
          <li key={"side_tab"}><Sidetab/></li>
        </ul>
      </AppContext.Provider>
      
  
    
    
    
    </>
  )
}

export default App
