//Import Necessary Packages and Files
import React from 'react'
import { Route, Switch } from 'react-router-dom';
import AdminDetail from './components/AdminDetail';
import HomeScreen from "./components/HomeScreen"
import UserDetail from './components/UserDetail';
import UserQuiz from './components/UserQuiz';
import UserQuizPortal from './components/UserQuizPortal';

//Main Function
export default function Router() {
    
    //Main Return Statement
    return (
       <Switch>
           {/* Page Routing */}
           <Route exact path="/" component={HomeScreen}/>
           <Route exact path="/userDetail" component={UserDetail}/>
           <Route exact path="/adminDetail" component={AdminDetail}/>
           <Route exact path="/userQuiz" component={UserQuiz}/>
           <Route exact path="/userQuizPortal" component={UserQuizPortal}/>
       </Switch>
    )
}
