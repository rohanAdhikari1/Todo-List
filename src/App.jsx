import { useState } from 'react'
import TodoTitle from './components/TodoTitle'
import './App.css'

function App() {

  return (
    <>
      <div className='Todo-header align-top text-center'>
        <TodoTitle />
      </div>
      <div className='Todo-container'>

      </div>
    </>
  )
}

export default App
