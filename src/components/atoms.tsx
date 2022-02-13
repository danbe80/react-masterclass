import { atom, selector } from "recoil";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE"
}

export interface IToDo {
  text: string;
  category: Categories;
  id: number;
}

const localStorageToDos = localStorage.getItem("ToDos");
export const parsedToDos = JSON.parse(localStorageToDos as any);

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
})
export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: parsedToDos?.length > 0 ? parsedToDos : [],
})

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({get}) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  }
});

//selector이 atom을 지켜보고 있기 때문에 atom이 변하면 selector도 변한다.