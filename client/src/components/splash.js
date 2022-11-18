// import { useState, useEffect } from "react";
// import Categories from "./categories";

function Splash(props) {
  let user = props.user;
  
  return (
    <div className="prompt">
      {user ? (<h4>Click "Affirm Me" for a new affirmation.</h4>) : (<h4>Log in to save the affirmations you believe, or click "Affirm Me" for a new affirmation.</h4>)}
    </div>
  );
}

export default Splash;
