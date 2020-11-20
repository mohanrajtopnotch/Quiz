import React , {useState} from 'react';
import {Switch } from 'react-router-dom';
import Router from './Router';
import { UserContext } from "./context/global";
function App() {
  // **********GLOBAL STATES**********
  
  //user
  const [userName, setUserName] = useState("Enter Your Name");
  const [rollNumber, setRollNumber] = useState("Enter Your Roll Number");
  const [savedQuizTitle, setSavedQuizTitle] = useState('React Quiz');
  const [score,setScore]=useState(0);
  const [answer, setAnswer] = useState('');
  const [questions,setQuestions]=useState(0);
  const [quizId,setQuizId]=useState('Enter your Quiz Title or Code or Id');
  
  //admin
  const [adminName,setAdminName]=useState("Enter Your Name");
  const [idForm, setIdForm] = useState('Enter your Quiz Title or Code or Id');
  const [questionForm, setQuestionForm] = useState('Enter Your Question');
  const [option1Form, setOption1Form] = useState('Answer Option 1');
  const [option2Form, setOption2Form] = useState('Answer Option 2');
  const [option3Form, setOption3Form] = useState('Answer Option 3');
  const [option4Form, setOption4Form] = useState('Answer Option 4');
  const [correctForm, setCorrectForm] = useState('Enter Correct Answer');
  
  //Main Return Statement
  return (
    <UserContext.Provider value={{
      userName,setUserName,
      rollNumber,setRollNumber,
      adminName,setAdminName,
      savedQuizTitle,setSavedQuizTitle,
      score,setScore,
      questions,setQuestions,
      answer,setAnswer,
      idForm, setIdForm,
      questionForm, setQuestionForm,
      option1Form, setOption1Form,
      option2Form, setOption2Form,
      option3Form, setOption3Form,
      option4Form, setOption4Form,
      correctForm, setCorrectForm,
      quizId,setQuizId,
    }}>
      <Switch>
        {/* Main Router ****Page Navigation**** */}
        <Router/>
      </Switch>
    </UserContext.Provider>
    )
}

export default App

