
import './App.css'
import Card from './Card.jsx'

function App() {

  return (
    <>
      <div>
        <h1 className="headingStyle">Todo App</h1>
        <div className='card-container'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  )
}

export default App
