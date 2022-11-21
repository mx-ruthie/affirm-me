import { useState, useEffect } from "react";

const AffirmMe = (props) => {
  let user = props.user;
  const [affirmation, setAffirmation] = useState("Even on your worst day, you are still a whole human being worthy of love.")
  const [category, setCategory] = useState("Random");
  const fetchAffirmation = () => {
    // fetch("/random") this almost works, but the proxy isn't working (calling localhost:3000 instead of 8080)
    fetch(`http://localhost:8080/${category}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setAffirmation(data.affirmation)
      })
  }
  const onChange = event => {
    setCategory(event.target.value);
    console.log(event.target.value);
  }
//Commented out this useEffect so that it would stop running the 
//fetchAffirmation every time the page loaded
  // useEffect(() => {
  //   fetchAffirmation()
  // }, [])
 //I need to add what makes the div return to the very inital state 
  return (
    <div className="entire-affirmation-div">
      <>
      <div className="affirmation-display-box">
        <h1>{affirmation}</h1>
      </div>
      {/* add onChange to the select tags + state that stores the current option that's been selected */}
      {/* onChange prop will have function that when executed will update state to the value coming in from onChange event */}
      {/* i can change the URL getting called in fetchAffirmation if I use the updated state */}
      {user ? (<select value={category} onChange={onChange}><option>Random</option> <option>theraputic</option> <option>advice</option> <option>self-esteem</option></select>) : null}
      </>
      <div className="affirmbutton">
          <button className="button-64" onClick={() => setAffirmation(fetchAffirmation)} >Affirm Me!</button>
      
    </div>
    
    </div>
  )
}

export default AffirmMe;