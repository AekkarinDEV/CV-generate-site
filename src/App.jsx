import Sidetab from "./component/Sidetab.jsx"
import Previewtab from "./component/Previewtab.jsx"

function App() {

  return (
    <>
    <ul className="container">
      <li key={"preview_tab "}><Previewtab/></li>
     <li key={"side_tab"}><Sidetab/></li>
    </ul>
    
    
    </>
  )
}

export default App
