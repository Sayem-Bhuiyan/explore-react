
import './App.css'
import Card from './Card.jsx'

function App() {
  const  desc = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, ad!'
  return (
    <>
      <div>
        <h1 className="headingStyle">Todo App</h1>
        <div className='card-container'>
          <Card title='call family' desc ={desc}   />
          <Card title = "call girlfriend" desc = "call her once in a week or month. No need to attached with her strongly" />
          <Card title= 'call mother' desc='try to call your mother every day or twice in a week. She is most cares about you all the time.' />
        </div>
      </div>
    </>
  )
}

export default App
