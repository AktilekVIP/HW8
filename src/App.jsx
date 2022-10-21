import { useState } from "react";
import ToDo from "./Components/ToDo";
import TodoForm from "./Components/TodoForm";
import styled from "styled-components";

const StyledTitle = styled.h1`
    width: 96vw;
    height: 150px;
    background-color: violet;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2%;
    
`
function App() {
  const [todos, setTodos] = useState([]);
  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(32),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };
  const removeTask = (id) => {
    setTodos([...todos.filter((todo)=> todo.id !== id )])
  };
  return (
    <div className="App">
      <header>
        <StyledTitle>Hello my friend . Today you have {todos.length} tasks.</StyledTitle>
        <TodoForm addTask={addTask} />
        {todos.map((todo) => {
          return (
            <ToDo
            key={todo.id}
              todo={todo}
              id={todo.id}
              removeTask={removeTask}
            />
          );
        })}
      </header>
    </div>
  );
}

export default App;
