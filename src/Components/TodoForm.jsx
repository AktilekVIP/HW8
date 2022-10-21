import { useState } from "react";
import styled from "styled-components";
const TodoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    handleSubmit("");
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit("");
    }
  };
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <InputForm
        type='text'
        value={userInput}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder='Enter your Task'
      />
      <AddTodoBtn>Add Item</AddTodoBtn>
    </Form>
  );
};

export default TodoForm;
const Form = styled.form`
  width: 50%;
  height: 200px;
  display: flex;
  margin: 0 auto;
`
const InputForm = styled.input`
  width: 350px;
  height: 75px;
  padding: 14px 32px 14px 16px;
  border-radius: 4px 0 0 4px;
  border: 2px solid #5d0cff;
  outline: none;
  background: transparent;
`;
const AddTodoBtn = styled.button`
    width: 75px;
    height: 75px;
    padding: 16px 7px;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    outline: none;
    background: linear-gradient(
      90deg,
      rgba(93, 12, 255, 1) 0%,
      rgba(155, 0, 250, 1) 100%
    );
    color: #fff;
    text-transform: capitalize;
`
