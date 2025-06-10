import React, { useRef, useState } from 'react'

const Todo = () => {

  //Todo 
  //- 사용자가 등록한 업무를 보관할 배열 생성(state)
  const [todos, setTodos] = useState([]);
  const inputRef = useRef("");


  const addTodo = (e) => {
    e.preventDefault();
    let todo = inputRef.current.value;
    // todos.push(todo); 참조값의 변경이 일어나지 않음 
    // setTodos(todos); 그래서 리액트가 변화를 감지못함

    // setTodos(todos.concat(todo)); //얘는 가능 새로운 참조값
    if(todo==="") {
      return;
    } else {
      setTodos([...todos, todo]);  //얘도 가능

    }
  }

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <form>
          <input type="text" ref={inputRef}/>
          <input type="submit" value="등록" onClick={addTodo}/>
        </form>
      </div>
      <div>
        {todos&&todos.map((item, index) => (
          <p key={index}>{index +1}.{item}</p>
        ))}
      </div>
    </div>
    
  )
}

export default Todo