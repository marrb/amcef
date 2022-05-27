import { useState, createContext, ReactNode } from "react";
import { Todo } from "../contracts/firebase";

interface ContextProps {
  children: ReactNode;
}

interface SearchType {
  searchText: string;
  setText: (InputText: string) => void;
  filterData: (todoList: Todo[]) => Todo[];
}

const SearchContext = createContext({} as SearchType);

export const SearchContextProvider = ({ children }: ContextProps) => {
  const [inputText, setInputText] = useState<string>("");

  const filterData = (todoList: Todo[]) =>
    todoList.filter(
      (todo) =>
        inputText === "" ||
        todo.title.toLowerCase().includes(inputText) ||
        todo.description.toLowerCase().includes(inputText) ||
        todo.deadline.includes(inputText)
    );

  const context: SearchType = {
    searchText: inputText,
    setText: setInputText,
    filterData: filterData,
  };

  return (
    <SearchContext.Provider value={context}>{children}</SearchContext.Provider>
  );
};

export default SearchContext;
