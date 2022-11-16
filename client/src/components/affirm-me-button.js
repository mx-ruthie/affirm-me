import { useState } from "react";

const AffirmMe = () => {
  const [affirmation, setAffirmation] = useState("Even on your worst day, you are still a whole human being worthy of love.")

  // const fetchData = () => {
  //   fetch("/")
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(data => {
  //       setAffirmation(data)
  //     })
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  return (
    <div className="affirmation-display">
      {affirmation}
      <>
        <button>Affirm Me!</button>
      </>
    </div>
  )
}

export default AffirmMe;