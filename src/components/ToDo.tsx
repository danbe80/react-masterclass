import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "./atoms";

function ToDo({text, category, id}:IToDo){
  const setToDos = useSetRecoilState(toDoState);
  /* const onClick = (newCategory:IToDo["category"]) => {
    console.log(newCategory);
  } */
  const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: {name},
    } = event;
    setToDos(oldToDos => {
      const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
      const newToDo = {text, id, category: name as any}
      
      return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
    });
    // setToDos를 사용하면 값을 즉시 변경할 수 있고 
    // 아니면 현재 값(혹은 oldToDos)을 argument로 주는 fn을 만들수 있음
  }
  return (
    <li>
      <span>{text}</span>
      {/* 인자를 넘겨주기 위해 익명 함수로 Click event */}
      {/* {category !== "DOING" && <button onClick={() => onClick("DOING")}>Doing</button>}
      {category !== "TO_DO" && <button onClick={() => onClick("TO_DO")}>To Do</button>}
      {category !== "DONE" && <button onClick={() => onClick("DONE")}>Done</button>} */}
      {category !== Categories.DOING && <button name={Categories.DOING} onClick={onClick}>Doing</button>}
      {category !== Categories.TO_DO && <button name={Categories.TO_DO} onClick={onClick}>To Do</button>}
      {category !== Categories.DONE && <button name={Categories.DONE} onClick={onClick}>Done</button>}
    </li>
  );
}

export default ToDo;

