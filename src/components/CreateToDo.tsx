import {useForm} from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "./atoms";

interface IForm {
  toDo: string;
}

function CreateToDo(){
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  
  const handleValid = ({toDo}:IForm) => {
    setToDos(oldToDos => {
      const allToDos = [...oldToDos, {id: Date.now(), text: toDo, category}];
      const stringifiedAllToDos = JSON.stringify(allToDos);
      localStorage.setItem("ToDos", stringifiedAllToDos);
      return allToDos;
    });
    setValue("toDo", ""); // input창 비우기
   
  }
  return (
    <form onSubmit={handleSubmit(handleValid)}>
    <input 
      {...register("toDo", {
        required: "Please write a To Do",
      })} 
      placeholder="Write a to do" />
    <button>Add</button>
  </form>
  );
}
export default CreateToDo;