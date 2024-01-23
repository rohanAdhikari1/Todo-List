import { useState, useEffect } from 'react'
import TodoTitle from './components/TodoTitle'
import './App.css'
import TodoItems from './components/TodoItems';
import Model from './components/Model';

function App() {

  const [todolist, settodolist] = useState([]);
  const [modal, setmodal] = useState(false);
  const [modaltitle, setmodaltitle] = useState('');
  const [modaltask, setmodaltask] = useState({});
  const [mode, setmode] = useState(1);

  useEffect(() => {
    let array = localStorage.getItem("todolist");
    if (array) {
      let list = JSON.parse(array)
      settodolist(list)
    }
  }, []);

  const deleteTask = (index) => {
    if (window.confirm("Are you sure to delete task?")) {
      let templist = [...todolist];
      templist.splice(index, 1);
      localStorage.setItem("todolist", JSON.stringify(templist));
      settodolist(templist);
    }
  }

  const handlestatus = (position, cstatus) => {
    let templist = [...todolist];
    templist[position].complete = cstatus;
    localStorage.setItem("todolist", JSON.stringify(templist));
    settodolist(templist);
  }

  const handledetail = (task, tmode) => {
    setmodaltitle(tmode == 2 ? "Edit Task" : "View Task Detail");
    setmodaltask(task);
    setmode(tmode);
    setmodal(true);
  }

  return (
    <>
      <div className='Todo-header align-top text-center'>
        <TodoTitle setmodal={setmodal} setmode={setmode} setmodaltitle={setmodaltitle} />
      </div>
      <div className='Todo-container'>
        {todolist.length === 0 ? (
          <p>No Any Task available</p>
        ) : (
          todolist.map((item, key) => (
            <TodoItems item={item} key={key} handlestatus={handlestatus} handledetail={handledetail} deleteTask={deleteTask} position={key} />
          ))
        )}
      </div>
      <Model modal={modal} modaltask={modaltask} mode={mode} title={modaltitle} setmodal={setmodal} settodolist={settodolist} todolist={todolist} />
    </>
  )
}

export default App
