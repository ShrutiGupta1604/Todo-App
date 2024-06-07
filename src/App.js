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
    <div className="main-body"> 
    <h1 className="todoHeading">ToDo-ReactApplication</h1>
    <h4 className="ownerHeading">"by Shruti Gupta"</h4>
    <div  className="div"> <input type="text" placeholder="Enter ToDo List" id="todoInput" className="todo-Input"></input></div>
    <div> <button onClick={()=>addTodo()}  className='btn-Added' >Add ToDo</button></div>
     
    {
    todo.map(element =>
    {
      return <div>
      {  
        element.completed?
        //comp;ete Todo
        <div className="compelete-todo">
        <div><input type="checkbox" checked onClick={()=>checkListener(element.id)} true  className="compelete-check"/> </div>
        <div className="compelet-todo-text"><s>{element.text+" "} </s> </div>
        </div>:
        //incomplete Todo 
        ( element.id === editingFlag ?
          //editing Fronted
        // <div> 
        // <input type="checkbox" onClick={()=>checkListener(element.id)} ></input>
        // <input type="text" Value={element.text} placeholder="Update Todo here" id="editTodo"/>
        // <button onClick={()=>deleteTodo(element.id)}>Delete</button>
        // <button onClick={()=>updateTodo()}>Save Todo</button>
        // </div>
        <div className="todoList">
        <div className="after-edit"><input type="text" Value={element.text} id="editTodo" /></div>
        <div>
          <span className="check-icon">
            <svg onClick={() => updateTodo()} xmlns="http://www.w3.org/2000/svg" color="blue" width="25" height="25" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16" >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
            </svg>
          </span>
          <span className="check-icon"><svg onClick={() => deleteTodo(element.id)} xmlns="http://www.w3.org/2000/svg" color="red" width="25" height="25" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
          </svg></span>
        </div>
      </div>
        :


             //default frotend
       <div className="todoList">
        <div className="text-todo">{element.text+" "}</div>
          {/* <input type="checkbox" onClick={()=>checkListener(element.id)} /> 
        <button onClick={()=>deleteTodo(element.id)}>Delete</button>
        <button onClick={()=>editTodo(element.id)}>Edit</button>
         */}
         <div>
                        <span className="check-icon">
                          <svg onClick={() => checkListener(element.id)} xmlns="http://www.w3.org/2000/svg" color="green" width="30" height="30" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                          </svg>
                        </span>
                        <span className="check-icon"> <svg onClick={() => editTodo(element.id)} xmlns="http://www.w3.org/2000/svg" color="blue" width="25" height="25" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                          <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                        </svg></span>
                        <span className="check-icon"><svg onClick={() => deleteTodo(element.id)} xmlns="http://www.w3.org/2000/svg" color="red" width="25" height="25" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                        </svg></span>
                      </div>

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