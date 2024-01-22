import { useState, useEffect } from 'react'
import TodoTitle from './components/TodoTitle'
import './App.css'
import TodoItems from './components/TodoItems';

function App() {

  const [todolist, settodolist] = useState([]);

  useEffect(() => {
    let array = localStorage.getItem("todolist");
    if (array) {
      let list = JSON.parse(array)
      settodolist(list)
    }
  }, []);

  const deleteTask = (index) => {
    console.log(index);
    // if (window.confirm("Are you sure to delete task?")) {
    //     let templist = todolist
    //     templist.splice(index, 1)
    //     localStorage.setItem("todolist", JSON.stringify(templist));
    //     settodolist(templist);
    // }
  }

  return (
    <>
      <div className='Todo-header align-top text-center'>
        <TodoTitle />
      </div>
      <div className='Todo-container'>
        {todolist.map((item, key) =>
          <TodoItems item={item} key={key} deleteTask={deleteTask} position={key} />
        )}
      </div>
    </>
  )
}

export default App
