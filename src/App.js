import BaseLayout from "./components/BaseLayout"
import {BrowserRouter} from "react-router-dom"
import Transition from "./components/Transition"

function App() {
   return (
      <>
         <BrowserRouter>
            <Transition />
            <BaseLayout />
         </BrowserRouter>
      </>
   );
}


export default App;
