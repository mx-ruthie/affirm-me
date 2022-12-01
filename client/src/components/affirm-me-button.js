import { useState, useEffect } from "react";

const AffirmMe = (props) => {
  let user = props.user;
  const [affirmation, setAffirmation] = useState("Even on your worst day, you are still a whole human being worthy of love.")
  const [category, setCategory] = useState("Random");
  
  const fetchAffirmation = () => {
    fetch(`/${category}`)
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

  return (
    <div className="entire-affirmation-div">
      
      <div className="affirmation-display-box">
        <h1>{affirmation}</h1>
      </div>
      <div className="dropdown-and-button">
     <div className="dropdown">{user ? (<select value={category} onChange={onChange}><option>Random</option> <option>Theraputic</option> <option>Advice</option> <option>Self-esteem</option></select>) : null} </div>
      <div className="affirmbutton">
          <button className="button-64" onClick={() => fetchAffirmation()} >Affirm Me!</button>
      
    </div>
    </div>
    
    </div>
  )
}

export default AffirmMe;