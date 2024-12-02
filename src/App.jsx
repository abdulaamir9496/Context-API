import './App.css'
// import Family from './prop-drilling/Family'
import Family from './Context-API/Family'
import { ContextFamily } from './Context-API/ContextFamily'

function App() {

  const familyMessage = {
      familyName: "Family of parent Context API"
    }
    
  return (
    <>
      <div>
        {/* TOPIC: Cotext-API */}
        {/* wrap the components inside the created context. 
            Whatever data is passed inside the context those components inside that context will know about that data.*/}
        <h1>Family Name Chain using Context-API</h1>
        <ContextFamily.Provider value={familyMessage}>
          <Family />
        </ContextFamily.Provider>


        {/* TOPIC: Prop-drilling */}
        {/* <h1>Family Name Chain using Prop-drilling</h1> */}
        {/* <Family message ={familyMessage} /> */}
      </div>
    </>
  )
}

export default App
