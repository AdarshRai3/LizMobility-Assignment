import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Suspense, lazy} from "react"
import Loader from "./components/Loader";


const Dashboard = lazy(() => import("./pages/Dashboard"));
const App = () => {
  return (
    <Suspense fallback={<Loader/>}>
       <Router>
        <Routes>
          <Route path="/admin/Dashboard" element={<Dashboard/>} />
        </Routes>
       </Router>
    </Suspense>  
  )
}
export default App;