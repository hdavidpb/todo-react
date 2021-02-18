import React, {useContext} from "react"
import ListItems from "./listItems"
import Footer from "./footer"
import "../list.css"
import {DataContext} from "./dataProvider"
function List () {
    const [todos, setTodos] = useContext(DataContext)

    const switchComplete = id =>{
        const newTodos = [...todos]
        newTodos.forEach((todo,index) => {
            if(index === id){
                todo.complete = !todo.complete
            }
        })
        setTodos(newTodos)
    }



    const handleEditTodos =(editvalue, id)  =>{
        const newTodos = [...todos]
        newTodos.forEach((todo,index) => {
            if(index === id){
                todo.name = editvalue
            }
        })
        setTodos(newTodos)
    }
   
    return(
        <div className = "todo-list-container">
        <ul className="todo-list">
      {
          todos.map((todo,index)=>(
              <ListItems todo = {todo} id = {index} checkComplete={switchComplete} handleEditTodos={handleEditTodos}/>
          ) )
      }
       <Footer/>
        </ul>
        </div>
       
    )
}
export default List