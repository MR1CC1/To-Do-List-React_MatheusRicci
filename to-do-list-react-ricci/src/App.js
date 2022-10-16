import { useState } from "react";
import "./App.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

function App() {

  let [list, setList] = useState([]);
  let [newTask, setNewtask] = useState("");

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const addNewTask = () => {
    setList([...list, newTask]);
    setNewtask("");
  };

  const delTask = (index) => {
    let arrayTemp = [...list];
    arrayTemp.splice(index, 1);
    setList(arrayTemp);
  };

  return (
    <div className="container">
      <h1>To Do List - React - Matheus Ricci</h1>
      <div className="task">
        <TextField className="input" id="outlined-basic" label="Tarefa" variant="outlined" value={newTask} onChange={inputValue => setNewtask(inputValue.target.value)} type="text" placeholder="Insira sua Tarefa..." />
        <Button className="btn-add" onClick={() => (newTask === "") ? alert("Insira uma Tarefa!") : addNewTask()} variant="outlined">Adicionar</Button>
      </div>
      <ul>
        {list.map((task, index) => (
          <div className="divTask">
            <li className="li-div">
              <Checkbox onChange={handleChange} />
              <div className="task-div">
                <p
                //style={{ textDecoration: checked ? 'line-through' : 'none' }}
                >
                  {task}
                </p>
              </div>
            </li>
            <Button variant="outlined" color="error" className="btn-del" onClick={() => delTask(index)}>X</Button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
