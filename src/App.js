import { useState } from "react"
import "../src/App.css";
const App=()=>
{
  const [todo,setTodo] = useState([])
  const[counter,setcounter] = useState(1)
  const [ editingFlag,setEditing] = useState(-1)


  function addTodo()
  {
    console.log("---CallToDoFunction----")
    let temptodoInput=document.getElementById("todoInput").value
    console.log("temptodoInput :" +temptodoInput)
    addToArray(temptodoInput, false) 
    document.getElementById("todoInput").value=""
  }

  function addToArray(text,completed)
  {
    let tempTodoObject ={
      id: counter ,
      text: text,
      completed: completed
    }

    todo.push(tempTodoObject)
    console.log(todo)
    setTodo([...todo])
    setcounter(counter+1)

  }

 function deleteTodo(id)
 {
  console.log("---DeleteToDoFunction----")
  let temptodo= todo.filter(element=>
    { 
      return element.id!==id
    })
    setTodo([...temptodo])

 }

 function checkListener(id)
 {
  console.log("----Call checkListener Function----")
  console.log(todo)
  todo.map(element=>
    {
      if(element.id === id)
      {
        element.completed = !element.completed
      }
      return element
    })
  console.log(todo)  
  setTodo([...todo])
 }

 function editTodo(id)
 {
  
    console.log("----Call editTodo Function----")
    setEditing(id)

 }

 function updateTodo()
 {
  console.log("---updateTodo function call-------")
  let tempTodo = todo.map(element => 
    {
      if(element.id === editingFlag)
      {
        element.text = document.getElementById("editTodo").value
      }
      return element
    })
    setEditing(-1)
    setTodo([...tempTodo])
}



  return (
  <div> 
    <h1>ToDo-ReactApplication</h1>
    <input type="text" placeholder="Enter ToDo List" id="todoInput"></input>
    <button onClick={()=>addTodo()}>Add ToDo</button>
    {
    todo.map(element =>
    {
      return <div>
      {  
        element.completed?
        //comp;ete Todo
        <div> 
        <input type="checkbox" checked onClick={()=>checkListener(element.id)}/> 
        <s>{element.text+" "} </s> 
        </div>:
        //incomplete Todo 
        ( element.id === editingFlag ?
          //editing Fronted
        <div> 
        <input type="checkbox" onClick={()=>checkListener(element.id)} ></input>
        <input type="text" Value={element.text} placeholder="Update Todo here" id="editTodo"/>
        <button onClick={()=>deleteTodo(element.id)}>Delete</button>
        <button onClick={()=>updateTodo()}>Save Todo</button>
        </div>:


             //default frotend
        <div>
          <input type="checkbox" onClick={()=>checkListener(element.id)} /> 
          {element.text+" "}
        <button onClick={()=>deleteTodo(element.id)}>Delete</button>
        <button onClick={()=>editTodo(element.id)}>Edit</button>
        

        </div>
        )
      }
      </div> 

  })
  }

  </div>
  )

}
export default App;