import React, { useState } from "react";
import Todo  from "./Todo";
import  TodoForm  from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
// import { EditTodoForm } from "./EditTodoForm";
uuidv4();

const TodoWrapper = () => {
  const [todos , setTodos] = useState([])
  const addTodo = todo => {
    setTodos([...todos , {id: uuidv4() , task: todo , completed: false , isEditing: false}])
  } 
  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo, completed: !todo.completed}: todo))
  }
  const deleteTodo =  id =>  { 
    setTodos(todos.filter( todo  => todo.id !== id))
  }
  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? {
    ...todo , isEditing:!todo.isEditing }: todo))
  }
  const renderList = () =>{
      console.log();
    return todos?.map((todo , index ) =>  {
       return <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/> 
      })
  }

  

  return (
    <div className='TodoWrapper'>
      <h1>
        Get Things Done !!
      </h1>
      <TodoForm addTodo={addTodo}/>
      { renderList()}
    </div>
  )
}

export default TodoWrapper
