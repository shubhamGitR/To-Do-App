import React, { useState } from 'react';
import Button from '@mui/material/Button';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!title) {
            alert("Title or Description cannot be blank");
        }
        else {
            addTodo(title);
            setTitle("");
        }
    }
    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />

                </div>
                <Button type="submit"   variant="contained" color="success">Add Todo</Button>
            </form>
        </div>
    )
}
