import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import userPic from "../assets/profile3478223ba4ea84756140387043a66fc5f0ed3e6.webp";

const Dashboard = () => {
  return (
    <div className = "admin-container">
      <AdminSidebar/>
      
      <main className="dashboard">
         <div className="bar">
          <BsSearch />
          <input type="test" placeholder="Search for projects"/>
          <FaRegBell/>
          <img src={userPic} alt="user"/>
        </div>
      </main> 
    </div>
  )
}

export default Dashboard;