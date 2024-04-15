import { ChangeEvent } from 'react';
import Todo from '../../types';
import './index.css'
import { on } from 'stream';

type Props = {
  todos: Todo[],
  onupdateAll:(done:boolean)=>void ,
  ondeleteFinishedTodos:(id?:string)=>void
}

export default function Footer(props:Props) {

  const{todos,onupdateAll,ondeleteFinishedTodos} = props;

  const changeCheckbox = (e:ChangeEvent<HTMLInputElement>) => {
 onupdateAll(e.target.checked)

 const handleDelete=()=>{
  if(window.confirm('are sure?')){
    ondeleteFinishedTodos();
  }
 }   


  }
  return (
    <div className="todo-footer">
      <label>
        <input
          type="checkbox"
          checked = { todos.filter((todo) => todo.done).length === todos.length &&
            todos.length !== 0
          }
          onChange={changeCheckbox}
        />
      </label>
      <span>
        <span>Finished {todos.filter((todo) => todo.done).length}</span> / total
        {todos.length}
      </span>
      <button className="btn btn-danger">Delete Finished Tasks</button>
    </div>
  );
}
