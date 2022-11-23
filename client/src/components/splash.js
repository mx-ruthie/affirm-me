// import { useState, useEffect } from "react";
// import Categories from "./categories";

function Splash(props) {
  let user = props.user;
  
  return (
    <div className="prompt">
      {user ? (<h3>Select a category and click "Affirm Me!" to show yourself some love.</h3>) : (<h3>Log in to select affirmations by category, or click "Affirm Me!" for a random one.</h3>)}
    </div>
  );
}

export default Splash;
