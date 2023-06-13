import React, {useState,useEffect} from 'react' 
import {Link} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import './Dutytable.css';

// Initialize Firebase
const firebaseConfig = {
  // Your Firebase configuration
  apiKey: "AIzaSyDJOxesiWvZ5z1CQr-W_cCWf45OKDH6MEo",
  authDomain: "ab-firebase-ddf74.firebaseapp.com",
  databaseURL: "https://ab-firebase-ddf74-default-rtdb.firebaseio.com",
  projectId: "ab-firebase-ddf74",
  storageBucket: "ab-firebase-ddf74.appspot.com",
  messagingSenderId: "70005192173",
  appId: "1:70005192173:web:6b5e84b2fc506d765f63e4"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const Dutytable=()=>{
    const [data,setData]=useState({});
    useEffect(() =>{
     database.ref().child("Duty_req").on("value",(snapshot)=>{
        if (snapshot.val()!==null){
            setData({ ...snapshot.val()});
        }else{
            setData({});
        }
     });
     return()=>{
        setData({});
     }
    },[]);
        const onDelete=(id)=>{
            if(window.confirm("are you sure?"))
            {
                database.ref().child(`Duty_req/${id}`).remove((err)=>{
                if(err){
                    toast.error(err);

                }else{
                    toast.success("Deleted");
                }
            })
            }
        }
    return(
        <div className="coe-dutytable-container">
		<header className="header-coe-dutytable">
	 <h2 className="logo-coe-duty">
	   <img src="./exam-logo.png" alt="AIMS Logo" className="logo-image-cdt" />
	   Amrita Invigilation Management System
	 </h2>
	 <nav className="navbar-coe-dutytable">
	 <a href="/">Home</a>
   <a href="/CoeDashboard">COE Dashboard</a>
	   {/* <a href="#faculty">Faculty</a>
	   <a href="#coe">COE</a>
	   <a href="/login">Login</a> */}
	 </nav>
   </header>
   <div className="dutytable-bckg">
      <h2 style={{ textAlign: 'center' }}>DUTY TABLE</h2>

            <table className="dutytable">
                <thead>
                <tr>
                <th className="dutytable-header" style={{textAlign:"centre"}}>No.</th>
                <th className="dutytable-header" style={{textAlign:"centre"}}>Exam</th>
                <th className="dutytable-header" style={{textAlign:"centre"}}>Department</th>
                <th className="dutytable-header" style={{textAlign:"centre"}}>Duty Requirement(hr)</th>
                <th className="dutytable-header" style={{textAlign:"centre"}}>Exam Date</th>
                <th className="dutytable-header" style={{textAlign:"centre"}}>Deadline</th>
				<th className="dutytable-header" style={{textAlign:"centre"}}>Status of Allotment</th>
                <th className="dutytable-header" style={{textAlign:"centre"}}>Action</th>

                </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((id,index)=>{
                        return(
                            <tr key={id}>
                                <th className="dutytable-cell" cope="row">{index+1}</th>
                                <td className="dutytable-cell">{data[id].exam}</td>
                                <td className="dutytable-cell">{data[id].department}</td>
                                <td className="dutytable-cell">{data[id].req}</td>
                                <td className="dutytable-cell">{data[id].date}</td>
                                <td className="dutytable-cell">{data[id].deadline}</td>
								<td className="dutytable-cell">Done</td>
                                <td className="dutytable-cell">
                                    
                                    <button className="delete-button-dt" onClick={() => onDelete(id)}>Delete</button>

                                </td>

                            </tr>
                        )
                    })}
					<ToastContainer/>
                </tbody>
            </table>
        
        </div><footer className="footer-dutytable">
        <p>&copy; 2023 Invigilation Management System. All rights reserved.</p>
      </footer></div>
    
    );
};
export default Dutytable;