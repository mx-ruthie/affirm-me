import { useState, useEffect } from "react";

const AffirmMe = () => {
  const [affirmation, setAffirmation] = useState("Even on your worst day, you are still a whole human being worthy of love.")

  const fetchAffirmation = () => {
    // fetch("/random") this almost works, but the proxy isn't working (calling localhost:3000 instead of 8080)
    fetch("https://www.affirmations.dev")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setAffirmation(data.affirmation)
      })
  }

  useEffect(() => {
    fetchAffirmation()
  }, [])
 
  return (
    <div className="affirmation-display">
      {affirmation}
      <>
        <button onClick={() => setAffirmation("Random string")} >Affirm Me!</button>
      </>
    </div>
  )
}

export default AffirmMe;