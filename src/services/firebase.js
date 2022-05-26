import { getDocs, addDoc, deleteDoc, doc, updateDoc, getDoc } from 'firebase/firestore'
import { firestore } from '../lib/firebase';
import { todoColRef } from '../lib/firestore.collection';


export async function getTodos(){
    const todoSnapshot = await getDocs(todoColRef);
    const todoList = todoSnapshot.docs.map(todo => ({id: todo.id, ...todo.data()}));

    return todoList;
}   


export async function addTodo(todoData){
    return await addDoc(todoColRef, { 
        title: todoData.title,
        description: todoData.description,
        deadline: todoData.deadline,
        finished: todoData.finished
     });
}


export async function deleteTodo(todoId){
    const docRef = doc(firestore, 'todos', todoId);
    return await deleteDoc(docRef);
}


export async function updateTodo(todoId){
    const docRef = doc(firestore, 'todos', todoId);
    const docSnapshot = await getDoc(docRef);

    return await updateDoc(docRef, { finished: !docSnapshot.data().finished });
}

