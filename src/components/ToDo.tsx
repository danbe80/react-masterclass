import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "./atoms";

function ToDo({text, category, id}:IToDo){
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: {name},
    } = event;
    setToDos(oldToDos => {
      const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
      const newToDo = { id, text, category: name as any}
      // localStorage 수정
      const newAllToDo = [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
      const stringifiedNewToDos = JSON.stringify(newAllToDo);
      localStorage.setItem("ToDos", stringifiedNewToDos);
      return newAllToDo;
    });
    // setToDos를 사용하면 값을 즉시 변경할 수 있고 
    // 아니면 현재 값(혹은 oldToDos)을 argument로 주는 fn을 만들수 있음
  }
  const handleDeleteBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: {parentElement},
    } = event;
    setToDos((newToDos) => {
      const newToDosArr = newToDos.filter((todo) => todo.id !== Number(parentElement?.id));
      const stringifiedNewToDos = JSON.stringify(newToDosArr);
      localStorage.setItem("ToDos", stringifiedNewToDos);
      return newToDosArr;
    });
  }
  return (
    <li id={id as any}>
      <span>{text}</span>
      {category !== Categories.DOING && 
      <button name={Categories.DOING} onClick={onClick}>
        Doing
      </button>}
      {category !== Categories.TO_DO && 
      <button name={Categories.TO_DO} onClick={onClick}>
        To Do
      </button>}
      {category !== Categories.DONE && 
      <button name={Categories.DONE} onClick={onClick}>
        Done
      </button>}
      <button onClick={handleDeleteBtn}>❌</button>
    </li>
  );
}

export default ToDo;

