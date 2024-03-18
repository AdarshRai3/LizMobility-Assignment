import { IconType } from "react-icons";
import {Link,Location, useLocation} from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";

const AdminSidebar = () => {
    const location = useLocation();
  return(
    <aside>
    <h2>Logo</h2>
      <div>
           <h5>Dashboard</h5>
        <ul>
          <li>
             <Link to={"/admin/Dashboard"} location = {location}>
             <RiDashboardFill/>
             Dashboard
             </Link>
         </li>
        </ul>         
      </div>
   </aside>

  ) 
        
   
    
  
}

export default AdminSidebar