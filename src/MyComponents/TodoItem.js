import React from 'react'
import Button from '@mui/material/Button';


export const TodoItem = ({todo, onDelete}) => {
    return (
        <>
        <div>
           <h4>{todo.title}</h4>
           <Button color="error" variant='contained' onClick={()=>{onDelete(todo)}}>Delete</Button> 
        </div>
        <hr/> 
        </>
    )
}
