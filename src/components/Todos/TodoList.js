import Todo from './Todo';


function TodoList(props){
    async function deleteHandler(key){
        await fetch(
            'https://react-todo-site-9e6f3-default-rtdb.firebaseio.com/todos/' + key + '.json',
            { 
                method: 'DELETE'
            }
        );
    }

    return(
        <>
            {props.Todos.map(todo => 
            <Todo 
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            deadline={todo.deadline}
            onConfirm={deleteHandler}/>)}
        </>
    );
}

export default TodoList;