import './App.css';
import { useState } from 'react'

const URL= 'https://www.boredapi.com/api/activity'

function App() {

  const [activity, setActivity] = useState('')
  const [participants, setParticipants] = useState(1)
  const [result, setResult] = useState('')

  async function search(e) {
    e.preventDefault()

    try {
      setResult('Looking for an activity, please wait.')
      const address = URL + '?type=' + activity + '&participants=' + participants
      const response = await fetch(address)
  
      if (response.ok) {
      const json = await response.json()
      console.log(json)
      setResult(json.activity)
      }
      else {
        setResult('')
        console.log(alert);
        alert('Error retrieving activity.')
      }
    } catch (err) {
      console.log(setResult);
      setResult('')
      alert(err)
    }
  }

  return (
    <div>
      <h3>Get an activity</h3>
      <form onSubmit={search}>
      <div>
        <label>Select an activity category:</label>
      </div>
      <div>
        <select name="activity" value={activity} onChange={e=> setActivity(e.target.value)}>
          <option value="education">Education</option>
          <option value="recreational">Recreational</option>
          <option value="social">Social</option>
          <option value="diy">Diy</option>
          <option value="charity">Charity</option>
          <option value="cooking">Cooking</option>
          <option value="relaxation">Relaxation</option>
          <option value="music">Music</option>
          <option value="busywork">Busywork</option>
        </select>
      </div>
      <div>
        <label>Number of participants:</label>
      </div>
      <div>
        <input type="number" onChange={e=> setParticipants(e.target.value)}></input>
      </div>
      <div>
      <button>Get activity</button>
      </div>
      <div>
        <output>{result}</output>
      </div>
    </form>
    </div>
  );
}

export default App;
