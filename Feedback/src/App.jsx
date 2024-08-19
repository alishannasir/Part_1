import { useState } from 'react'

function App() {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
 
  const goodBtn = ()=>{
    setGood(good + 1)
  }
  const neutralBtn =()=>{
    setNeutral(neutral + 1)
  }
  const badBtn =()=>{
    setBad(bad + 1)
  }

  const addALlNumbers = good + bad + neutral;
  const average = (good + bad + neutral) / 3;
  const Positive = (good / addALlNumbers) * 100
  return (
   <>
     <h1>Give Feed Back</h1>
     <button onClick={goodBtn}>Good</button>
     <button onClick={neutralBtn}>neutral</button>
     <button onClick={badBtn}>bad</button>
     
     <h2>Statistics</h2>
     <h3>Good: {good}</h3>
     <h3>Neutal: {neutral}</h3>
     <h3>Bad : {bad}</h3>
     <h3>All :{addALlNumbers} </h3>
     <h3>Average : {average}</h3>
     <h3>Positive : {Positive} %</h3>
   </>
  )
}

export default App
