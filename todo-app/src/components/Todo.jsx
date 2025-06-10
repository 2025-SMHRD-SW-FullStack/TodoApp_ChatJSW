import React, { useRef, useState } from 'react'
import CheckBox from './CheckBox';

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
        {todos.map((item, index) => (
  <p key={index}>
    <CheckBox  item={item} />
  </p>
))}
      </div>
    </div>
    
  )
}

export default Todo

// [CheckBox.jsx]
// 1.ToDo 컴포넌트에서 전달받은(props) 데이터 구조 분해 -> state, setState, 선택 요소 index
// 2.체크박스가 클릭되었을 때 실행되는 함수 handleCheck 생성
// 2-1.체크를 했을때는 밑줄 체크를 해제했을때는 밑줄을 없애야 하므로
//     체크박스가 클릭됬을때 현재 체크박스의 상태를 알 수 있는 isCheck 생성 -> e.target.checked
// 2-2.setTodos 함수를 통해 체크한 항목은 <del> 태그로 감싸서 출력할것 (<del>data</del>)
//     -> listContent를 map 함수를 통해 순회 하기
//     -> 순회 중 index가 checkIdx와 같을때 isChecked가 true일 때는 <del> 태그로 data를 감싸서 반환,
// 2-3. setListContent 함수를 통해 다시 체크한 항목을  <del></del> 태그로 감싸진 data 를 빼내서 출력할것
//     -> listContent를 map 함수를 통해 순회 하기
//     -> 순회 중 index가 checkIdx와 같을때 isChecked가 false일 때는 data.props.children을 반환
// 2-4.index가 checkIdx와 다르면 data를 그대로 반환하세요.

// 2단계 힌트 : setTodos(todos.map((data, idx) => { /* 조건문과 반환값 작성 */ }));
