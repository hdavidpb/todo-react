import React, {useState} from "react"
import "../list.css"


function ListItems({todo,id,checkComplete,handleEditTodos}) {
    
    const [onEdit,setOnEdit] = useState (false)
    const [editValue , setEditValue] = useState (todo.name)

   const  handleOnEdit = () => {
    setOnEdit (true)
   }

const handleSave = id =>{
    setOnEdit (false)
    if(editValue){
        handleEditTodos(editValue,id)
    }else{
        setEditValue(todo.name)
    }
}


    
   if (onEdit){
    return(
        <li className = "li-box ">
           <input type = "text" id="editValue" value={editValue}  name="editValue" onChange = {e => setEditValue(e.target.value.toLowerCase())}/>
           
         <button onClick ={() => handleSave(id)}>Save</button>       
    </li>
    )

   }else{
    return(
        <li className = "li-box ">
       <label className = "li-label" htmlFor={id} className ={todo.complete ? "active" : ""}>
           <div className = "input-box">
           <input type = "checkbox" id={id} checked={todo.complete}
           onChange = {()=>checkComplete(id)} />
          
           </div>
          
          <span>{todo.name}</span>  
       </label>
      
    </li>
    
    )
   }
    
    
    
}

export default ListItems