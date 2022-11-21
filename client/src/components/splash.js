// import { useState, useEffect } from "react";
// import Categories from "./categories";

function Splash(props) {
  let user = props.user;
  
  return (
    <div className="prompt">
      {user ? (<h3>Affirm yourself by clicking "Affirm Me"</h3>) : (<h3>Log in to save the affirmations you believe, or click "Affirm Me" to affirm yourself right away.</h3>)}
    </div>
  );
}

export default Splash;
