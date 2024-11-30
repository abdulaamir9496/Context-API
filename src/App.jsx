import './App.css'
import Family from './prop-drilling/Family'

function App() {

  const familyMessage = {
    familyName: "Incredible Marvels"
  }

  return (
    <>
      <div>
        <h1>React App</h1>
        <Family message ={familyMessage} />
      </div>
    </>
  )
}

export default App
