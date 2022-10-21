import React from 'react'
import styled from 'styled-components'
const ToDo = ({id,todo , removeTask}) => {
  return (
    <TodoItem key={id}>
        <div>{todo.task}</div>
        <button onClick={()=>{removeTask(id)}}> Delete Item </button>
    </TodoItem>
  )
}

export default ToDo
const TodoItem = styled.div`
  padding: 14px;
    width: 250px;
    margin: 0 auto;
    text-align: left;
    margin-top: 15px;
    background: linear-gradient(
      90deg,
      rgba(93, 12, 255, 1) 0%,
      rgba(155, 0, 250, 1) 100%
    );
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`