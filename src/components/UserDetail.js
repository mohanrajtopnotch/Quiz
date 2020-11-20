//Import Necessary Package and Files
import React , {useState,useContext} from 'react'
import {Link} from "react-router-dom"
import {UserContext} from "../context/global"
import "../css/UserDetail.css"

//Main Function
export default function UserDetail() {
    
    //Importing Global States
    const {userName,setUserName}=useContext(UserContext);
    
    //Local State
    const [validation,setValidation]=useState('false');
    
    //Form Validation
    const formValidation=()=>{
        if(userName=="Enter Your Name"){
            alert("Enter your Name");
        }
        else{
            setValidation('')
        }
    }
    
    //Main Return Statement
    return (
        <div className="container-fluid" style={{backgroundColor:'#77bfa3',width: "100vw",minHeight: "100vh"}}>
        <div className="p-sm-5 padding-css">
        <header>
        <p className="text-center p-size">Welcome to Quiz Assesment</p>
        <p className="text-center p-size">User Panel</p>
        </header>
        <form>
            <div className="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input required type="text" className="form-control input-css" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={userName} onChange={(e)=>setUserName(e.target.value)}/>
            </div>
            {validation=='false'?
                <button type="submit" className="btn btn-primary" onClick={()=>formValidation()
                }>Start Quiz</button>
            :
            <Link to="/userQuiz">
                <button type="submit" className="btn btn-primary">Click Here</button>
            </Link>}
        </form>
      </div>
    </div>
    )
}
