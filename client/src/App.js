import "./App.css";
import NavBar from "./components/nav-bar";
import Splash from "./components/splash";
import Profile from "./components/profile";
import { useAuth0 } from '@auth0/auth0-react';
import Loading from "./components/loading";
import { Route, Routes, Link } from 'react-router-dom';
import AffirmMe from "./components/affirm-me-button";
//import { useState } from "react";
//now I need to replace student stuff with my affirmations app data and functionality
function App() {

  // const [affirmation, setAffirmation]= useState("Even on your worst day, you are still a whole human being worthy of love.");
  const { isLoading } = useAuth0();
  const { user } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="body">
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
     
      <div className="container flex-grow-1">
      {!user ? <span><h2>Welcome to the I Affirm Me App</h2></span> : <span><h2>Hello <Link to="api/me">{!user.given_name ? user.nickname : user.given_name}</Link></h2></span> }
      <AffirmMe user={user}/>
      <Splash user={user}/>
      <Routes>
        <Route path="/random" />
        <Route path="/table"/>
        <Route path="api/me" element={<Profile user={user}/>} />
      </Routes>
    
      
      </div>
    </div>
    </div>
  );
}

export default App;