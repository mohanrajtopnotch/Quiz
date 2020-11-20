//Import Necessary Package and Files
import React, { useContext , useState} from 'react'
import {Link } from 'react-router-dom';
import {UserContext} from '../context/global';
import "../css/UserQuiz.css"

//Main Function
export default function UserQuiz() { 
    
    //Importing Global states
    const {userName,quizId,setQuizId}=useContext(UserContext);
    
    //Local State
    const [validation,setValidation]=useState('false');
    
    //Form Validation
    const formValidation=()=>{
        if((quizId==="Enter your Quiz Title or Code or Id")){
            alert("Enter your Quiz Title or Code or Id");
        }
        else{
            setValidation('');
        }
    }
    
    //Main Return Statement
    return (
        <div className="container-fluid" style={{backgroundColor:'#77bfa3',width: "100vw",minHeight: "100vh"}}>
        <div className="p-sm-5 padding-css">
        <header>
        <p className="text-center p-size">Welcome <span style={{color:'red'}}>{userName}</span> to Quiz Assesment</p>
        <p className="text-center p-size">Search Your Assesment Here !!</p>
        <div className="p-1 col-12">
           <div className="form-group">
                <label for="exampleInputPassword1">Quiz Id or Name or Code</label>
                <input className="form-control input-css" placeholder={quizId} type="text" onChange={(e)=>{setQuizId(e.target.value)}}/>
                {validation==='false'?
                <div className="pt-4">
                <button className="btn-dark user-button-css" onClick={()=>{
                    formValidation()
                }} >Start Quiz</button>
                </div>
                :
                <div className="pt-4">
                    <Link to="/userQuizPortal">
                    <button className="btn-dark user-button-css">click Here</button>
                    </Link>
                </div>
                }
            </div>
        </div>
        </header>
      </div>
    </div>
    )
}
