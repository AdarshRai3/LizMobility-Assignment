import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Suspense, lazy} from "react"
import Loader from "./components/loader"


const Home = lazy(() => import("./pages/home"));
const App = () => {
  return (
    <Suspense fallback={<Loader/>}>
       <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
       </Router>
    </Suspense>  
  )
}
export default App;