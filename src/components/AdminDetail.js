//Import Necessary Package and Files
import React, { useState , useContext} from 'react';
import {Link} from 'react-router-dom';
import {UserContext} from "../context/global";
import axios from 'axios';
import '../css/AdminDetail.css';

//Main Function
export default function AdminDetail() {
    
    //Importing Global States
    const {
      idForm, setIdForm,
      questionForm, setQuestionForm,
      option1Form, setOption1Form,
      option2Form, setOption2Form,
      option3Form, setOption3Form,
      option4Form, setOption4Form,
      correctForm, setCorrectForm,
    }=useContext(UserContext);

    const createDataAxios=(e)=>{
    
    // Data Assigning To MAP OBJECT
    var data={
        "ID":idForm,
        "QUESTION":questionForm,
        "OPTION1":option1Form,
        "OPTION2":option2Form,
        "OPTION3":option3Form,
        "OPTION4":option4Form,
        "CORRECT":correctForm
    }
    
    //Server Post Method ****Send Data to Database****
    axios.post(`http://localhost:7000/Quiz/createData`,data)
        .then((res)=>{
            alert("Quiz Succesfully Created");  
            console.log(res);
        })
        .catch((err)=>{
            alert("Quiz Not Succesfully Created");
            console.log("Name Not send due to"+" "+err);
        })
    }
    //Form Validation
    const formValidation=(e)=>{
        if( (idForm=="Enter your Quiz Title or Code or Id")&&(questionForm=="Enter Your Question")&&
            (option1Form=="Answer Option 1")&&(option2Form=="Answer Option 2")&&
            (option3Form=="Answer Option 3")&&(option4Form=="Answer Option 4")&&
            (correctForm=="Enter Correct Answer"))
        {
            alert("Enter All The Fields");
        }
        else{
            createDataAxios(e);
        }
    }
    //Main Return Statement
    return (
    <div className="container-fluid container-css">
      <div className="p-sm-5 padding-css">
        <header>
            <p className="text-center p-size">Welcome to Quiz Assesment</p>
            <p className="text-center p-size">Admin Panel</p>
        </header>
        <div className="p-1 text-center">
                <Link to="/">
                <button type="submit" className="btn btn-primary">Home</button>
                </Link>
        </div>
        {/* Question Entry Form */}
        <form>
            {/* <div className="form-group">
                <label for="exampleInputPassword1">Quiz Title</label>
                <input style={{width:'300px'}}  type="text" className="form-control" id="exampleInputPassword1" placeholder={quizTitle} onChange={(e)=>setQuizTitle(e.target.value)}/>
            </div> */}
            <div className="form-group">
                <label for="exampleInputPassword1">Quiz Code or id</label>
                <input type="text" className="form-control input-css" id="exampleInputPassword1" placeholder={idForm} onChange={(e)=>setIdForm(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Question</label>
                <input type="text" className="form-control input-css" id="exampleInputPassword1" placeholder={questionForm} onChange={(e)=>setQuestionForm(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Option 1</label>
                <input type="text" className="form-control input-css" id="exampleInputPassword1" placeholder={option1Form} onChange={(e)=>setOption1Form(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Option 2</label>
                <input type="text" className="form-control input-css" id="exampleInputPassword1" placeholder={option2Form} onChange={(e)=>setOption2Form(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Option 3</label>
                <input type="text" className="form-control input-css" id="exampleInputPassword1" placeholder={option3Form} onChange={(e)=>setOption3Form(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Option 4</label>
                <input type="text" className="form-control input-css" id="exampleInputPassword1" placeholder={option4Form} onChange={(e)=>setOption4Form(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Correct</label>
                <input type="text" className="form-control input-css" id="exampleInputPassword1" placeholder={correctForm} onChange={(e)=>setCorrectForm(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={(e)=>formValidation(e)}>Click to Create Quiz</button> 
        </form>
      </div>
    </div>
    )
}
