import { useState, createContext } from "react";

const SearchContext = createContext({
  searchText: "",
  setText: (InputText) => {},
  filterData: (todoList) => {},
});

export function SearchContextProvider(props) {
  const [inputText, setInputText] = useState("");

  const filterData = (todoList) =>
    todoList.filter(
      (todo) =>
        inputText === "" ||
        todo.title.toLowerCase().includes(inputText) ||
        todo.description.toLowerCase().includes(inputText) ||
        todo.deadline.includes(inputText)
    );

  const context = {
    searchText: inputText,
    setText: setInputText,
    filterData: filterData,
  };

  return (
    <SearchContext.Provider value={context}>
      {props.children}
    </SearchContext.Provider>
  );
}

export default SearchContext;
