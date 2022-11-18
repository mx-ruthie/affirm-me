import { useState, useEffect } from "react";

const AffirmMe = () => {
  const [affirmation, setAffirmation] = useState("Even on your worst day, you are still a whole human being worthy of love.")

  const fetchAffirmation = () => {
    // fetch("/random") this almost works, but the proxy isn't working (calling localhost:3000 instead of 8080)
    fetch("http://localhost:8080/random")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setAffirmation(data.affirmation)
      })
  }
//Commented out this useEffect so that it would stop running the 
//fetchAffirmation every time the page loaded
  // useEffect(() => {
  //   fetchAffirmation()
  // }, [])
 //I need to add what makes the div return to the very inital state 
  return (
    <div className="affirmation-display">
      {affirmation}
      <>
        <button onClick={() => setAffirmation(fetchAffirmation)} >Affirm Me!</button>
      </>
    </div>
  )
}

export default AffirmMe;