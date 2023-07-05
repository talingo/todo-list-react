/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';


function ToDoList() {
    const [toDos, setToDos] = useState([]);

    const addToDo = toDo => {
        if (!toDo.text || /^\s*$/.test(toDo.text)) {
            return
        }

        const newToDos = [toDo, ...toDos];
        setToDos(newToDos);
    }

    const removeToDo = id =>{
        const removeArr = [...toDos].filter(toDo => toDo.id !== id);
        setToDos(removeArr);
    }

    const updateToDo = (toDoId, newValue) =>{
        if (!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }
        setToDos(prev => prev.map(item => (item.id === toDoId ? newValue : item)))
}

    return (<>
        <h1>What's your plan today?</h1>
        <ToDoForm onSubmit={addToDo} />
        <ToDo toDos={toDos} removeToDo={removeToDo} updateToDo={updateToDo}/>
    </>
    )
}


export default ToDoList