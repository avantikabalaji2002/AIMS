import React, {useEffect,useState} from 'react';
import { Link,useLocation } from 'react-router-dom';
//import "./Header.css"

const Header = () => {
    const[activeTab,setActiveTab]=useState("Home");
    const location=useLocation();
    useEffect(() =>{
        if (location.pathname==="/")
        {
            setActiveTab("Home")

        }
        else if(location.pathname==="/add"){
            setActiveTab("Add Faculty")
        }
        else if (location.pathname==="/view"){
            setActiveTab("View")
        }
    }, [location]);
    return (
    <div className="header">
        <p className='logo'>AIMS</p>
        <div className='header-right'>
            <Link to="/">
            <p className={`${activeTab === "Home" ? "active": ""}`}
                onclick={ () =>setActiveTab("Home")}>Home</p>
            </Link>
            <Link to="/add">
            <p className={`${activeTab === "Add Faculty" ? "active": ""}`}
                onclick={ () =>setActiveTab("Add faculty")}>Add Faculty</p>
            </Link>
                      
            
        </div>
    </div>
  )
}

export default Header;