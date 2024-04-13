import Header from "./components/header";
import Footer from "./components/footer";
import List from "./components/list";
import Todo from "./types";
import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [todos,setTodos]= useState<Todo[]>([]);
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
        <Header />
        <List todos={todos} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
