import "./App.css";
import NavBar from "./components/nav-bar";
import Splash from "./components/splash";
import Profile from "./components/profile";
import { useAuth0 } from '@auth0/auth0-react';
import Loading from "./components/loading";
import { Route, Routes, Link } from 'react-router-dom';
import AffirmMe from "./components/affirm-me-button";
//now I need to replace student stuff with my affirmations app data and functionality
function App() {

  const { isLoading } = useAuth0();
  const { user } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <Splash />
      <div className="container flex-grow-1">
      {!user ? <span>Welcome to the I Affirm Me App</span> : <span>Hello <Link to="api/me">{user.name}</Link></span> }
      <Routes>
      <Route path="/random" />
      <Route path="/table"/>
      {/* <Route path="/" element={<Students user={user}/>} /> */}
      <Route path="api/me" element={<Profile user={user}/>} />
      </Routes>
      <AffirmMe />
      </div>
    </div>
  );
}

export default App;