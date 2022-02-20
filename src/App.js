import React, { useState } from "react";
import "./App.css";
import { Route, useHistory } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Watch from "./Pages/Watch";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import {Firebase} from './firebase/config'
import 'firebase/auth'
import MyList from "./Pages/MyList";

function App() {
  const [loggedIn, setloggedIn] = useState(false)
  const history = useHistory()

  Firebase.auth().onAuthStateChanged((user) => {
    if(user){
      setloggedIn(true)
    }
    else{
      history.push('/signIn')
    }
  })

  return (
    <React.Fragment>
      <Route exact path="/" component={ loggedIn && HomePage } />
      <Route path="/watch" component={loggedIn && Watch} />
      <Route path="/signIn" component={SignIn}/>
      <Route path="/signUp" component={SignUp}/>
      <Route path="/list" component={MyList}/>
    </React.Fragment>
  );
}

export default App;
