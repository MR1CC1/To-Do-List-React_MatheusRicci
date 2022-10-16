import { useState } from "react";


function App() {

  let [list, setList] = useState([]);
  let [newTask, setNewtask] = useState("");

  function addNewTask() {
    setList([...list, newTask]);
    setNewtask("");
  }

  function delTask(index) {
    let arrayTemp = [...list];
    arrayTemp.splice(index, 1)
    setList(arrayTemp)
  }

  return (
    <>
      <input value={newTask} onChange={value =>
        setNewtask(value.target.value)} type="text" placeholder="Tarefa" />
      <button onClick={() => addNewTask()}>Add</button>
      <ul>
        {list.map((task, index) => (
          <li>
            {task}
            <button onClick={() => delTask(index)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
