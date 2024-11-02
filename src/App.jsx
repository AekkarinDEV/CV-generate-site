import Sidetab from "./component/Sidetab.jsx"
import Previewtab from "./component/Previewtab.jsx"
import { createContext, useContext, useState } from "react"

export const AppContect = createContext()

function App() {
  
  const [username,setUsername] = useState("Aekkarin Booddahloo")
  
  return (
    <>
    <AppContect.Provider value={{username,setUsername}}>
      <ul className="container">
        <li key={"preview_tab "}><Previewtab/></li>
      <li key={"side_tab"}><Sidetab/></li>
      </ul>
    </AppContect.Provider>
    
    
    
    </>
  )
}

export default App
