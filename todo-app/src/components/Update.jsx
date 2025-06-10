import React from "react";
import { useState } from "react";

const Update = ({ data }) => {
  const todos = data.todos;
  const setTodos = data.setTodos;
  const checkIdx = data.index;

  const [isEditing, setIsEditing] = useState(false);
  const [currentContent, setCurrentContent] = useState("");

  const handleUpdateClick = () => {
    if (!isEditing) {
      // 수정 모드로 진입
      setTodos(
        todos.map((data, index) => {
          if (index === checkIdx) {
            return (
              <input
                placeholder={data}
                defaultValue={data}
                onChange={(e) => setCurrentContent(e.target.value)}
              />
            );
          } else {
            return data;
          }
        })
      );
      setIsEditing(true);
    } else {
      // 수정 모드 종료 (업데이트 반영)
      setTodos(
        todos.map((data, index) => {
          if (index === checkIdx) {
            const newValue =
              currentContent === "" ? data.props.placeholder : currentContent;
            return newValue;
          } else {
            return data;
          }
        })
      );
      setIsEditing(false);
    }
  };

  return (
    <div style={{ display: "inline-block" }}>
      <button onClick={handleUpdateClick}>
        {isEditing ? "수정 완료" : "내용 수정하기"}
      </button>
    </div>
  );
};

export default Update;
