import { useState, useEffect, createContext } from "react";

const FinishedContext = createContext({
    finished: [],
    totalFinished: 0,
    addFinished: (finishedTodo) => {},
    removeFinished: (todoId) => {},
    todoIsFinished: (todoId) => {},
    deleteFinished: (todoID) => {},
});

export function FinishedContextProvider(props){
    const [userFinished, setUserFinished] = useState([]);


    useEffect(() => {
        fetch('https://react-todo-site-9e6f3-default-rtdb.firebaseio.com/todos.json'
        ).then((response) => {
            return response.json();
        }).then((data) => {

            for(const key in data){
                const todo = {
                id: key,
                ...data[key]
            };
                if(todo.finished === true){
                    addFinishedHandler(todo);
                }
            }
        });  
    }, []);


    const context = {
        finished: userFinished.sort((a,b) => (a.deadline > b.deadline) ? 1 : -1),
        totalFinished: userFinished.length,
        addFinished: addFinishedHandler,
        removeFinished: removeFinishedHandler,
        todoIsFinished: todoIsFinishedHandler,
        deleteFinished: deleteFinishedHandler,
    };


    function addFinishedHandler(finishedTodo){
        fetch(
            'https://react-todo-site-9e6f3-default-rtdb.firebaseio.com/todos/' + finishedTodo.id + '.json',
            { 
                method: 'PATCH',
                body: JSON.stringify({
                    finished: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )

        setUserFinished((prevUserFinished) => {
            return prevUserFinished.concat(finishedTodo);
        });   
    }


    function removeFinishedHandler(todoId){
        fetch(
            'https://react-todo-site-9e6f3-default-rtdb.firebaseio.com/todos/' + todoId + '.json',
            { 
                method: 'PATCH',
                body: JSON.stringify({
                    finished: false
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )

        setUserFinished((prevUserFinished) => {
            return prevUserFinished.filter(todo => todo.id !== todoId);
        });
    }


    function todoIsFinishedHandler(todoId){
        return userFinished.some(todo => todo.id === todoId);
    }


    function deleteFinishedHandler(todoId){
        setUserFinished((prevUserFinished) => {
            return prevUserFinished.filter(todo => todo.id !== todoId);
        });
    }

    
    return(
        <FinishedContext.Provider value={context}>
            {props.children}
        </FinishedContext.Provider>
    );
}

export default FinishedContext;