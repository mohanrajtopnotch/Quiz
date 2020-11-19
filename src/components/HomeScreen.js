//Import Necessary Package and Files
import React from 'react'
import {Link} from 'react-router-dom';
import "../css/HomeScreen.css"

//Main Function
export default function HomeScreen() {
  
  //Main Return Statement  
  return (
        <div className="container-fluid container-css">
        <div className="p-sm-5 padding-css">
        <header>
        <p className="text-center welcome-p-css">Welcome to Quiz Assesment</p>
        </header>
        <div className="d-flex row">
          <div className="p-4 col-12" style={{textAlign:'center'}}>
           <Link to="/adminDetail">
                <button className="btn-dark p-2" style={{width:"100px",borderRadius:'10px'}}>
                  Admin
                </button>
           </Link>
          </div>
          <div className="p-4 col-12" style={{textAlign:'center'}}>
           <Link to="/userDetail">
            <button  className="btn-dark p-2" style={{width:"100px",borderRadius:'10px'}}>
              User
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    )
}
