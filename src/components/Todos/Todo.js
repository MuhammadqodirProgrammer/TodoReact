  import { useState } from "react";
  
  
  const Todo = () => {
    const [todos,setTodos] = useState([
  
    ])
   let [inputValue,setInputValue] =useState("")

   function handleSubmt (evt){
       evt.preventDefault()

setTodos([
    ...todos,
    {
        // id:todos.at(-1).id +1 || 1,
        id: todos.length>0 ? todos[todos.length - 1].id +1 :1,
        isCompleted:false,
        text:inputValue,
    }])
    evt.nativeEvent.target[0].value =""
}
const hendleDelete =({id})=>{
    console.log(id);
    setTodos(todos.filter(todo => todo.id !==id))
}
const hendleEdit = ({id})=>{
   const edit = todos.filter(todo => {
    if (todo.id===id) {
        console.log(todo.text);
     let editVal =   prompt("todolarni ozgartiring",todo.text)
     console.log(editVal);
     todo.text =editVal
    }
    return "ishladi"
})
setTodos(edit)
   console.log(edit);
}
const handleChachbox =({id})=>{
const chexboxFilter = todos.filter(todo =>{
    console.log(id);
    // const elCheckbox =  document.body.children[1].children[0].children[2].children[id - 1].children[1]
    // elCheckbox.toggle("disabled")
    document.body.children[1].children[0].children[2].children[id - 1].children[1].style.textDecorationLine ="line-through"
    // console.dir(document.body.children[1].children[0].children[3].children[id - 1].children[1].style.textDecorationLine ="line-through");
   return todo.id === id

})
console.log(chexboxFilter);
}

  return (
    <>
    <form onSubmit={handleSubmt}>
        <input type={"text"} pliaceholder="Enter Todo.." onChange={(evt)=> setInputValue(evt.target.value)}  className="elInput"></input>
        <button type="submit" className="send-btn">Send</button>

    </form>
        <ul className="list">
        {
            todos.map(todo =><li className="item" >
    <input type={"checkbox"} onClick={()=> handleChachbox(todo)} ></input>
    <span className="todo_text">{todo.text}</span>
<div className="btns">
<button className="js-edit" data-todo-id={todo.id} onClick={()=> hendleEdit(todo)}>Edit</button>
    <button className="js-delete" data-todo-id={todo.id} onClick={() => hendleDelete(todo)}>Delete</button>
</div>
</li> )
        }

        </ul>
    </>
  );
};

export default Todo;
