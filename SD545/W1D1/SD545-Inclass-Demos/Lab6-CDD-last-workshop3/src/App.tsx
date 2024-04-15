import Header from "./components/header";
import Footer from "./components/footer";
import List from "./components/list";
import Todo from "./types";
import { useEffect, useState } from "react";
import './App.css';

function App() {
  
  const [todos,setTodos]= useState<Todo[]>([]);
  
  const addNewTodos= (newTodo:Todo)=>{
    setTodos([...todos,newTodo])
  }

  const updateTodo = (id: string) => {
    const newTodos = todos.map((todos) =>
      todos.id === id ? { ...todos, done: !todos.done } : todos
    );
    setTodos(newTodos);
  };

  const deleteTodoById=(id:string)=>{
    setTodos(todos.filter(todos=>todos.id !==id))
  }

  const updateAll=(value:boolean)=>{
    setTodos(todos.map(todo =>({...todo,done:value})))
  }
  const deleteFinishedTodos=()=>{
    setTodos(todos.filter(todo=>!todo.done));
  }
  useEffect(()=>{
    async function getTodos(){
      const response = await fetch('http://localhost:9000/todos');
      const data= await response.json();
      setTodos(data)
    }
    getTodos();
  },[])
  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header onAddNewTodo={addNewTodos} />
        <List
          todos={todos}
          onUpdateTodo={updateTodo}
          onDeleteTodoById={deleteTodoById}
        />
        <Footer todos={todos} onupdateAll={updateAll} ondeleteFinishedTodos={deleteFinishedTodos}/>
      </div>
    </div>
  );
}

export default App;
