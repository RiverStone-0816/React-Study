import React, { useState } from 'react';
import "./App.css";

export default function Test() {

    const [todoData, setTodoData] = useState([
        { id: 1, title: "Study", completed: false },
        { id: 2, title: "Clean", completed: false }
    ])

    const handleClick = (dataId) => {
        const newTodoData = todoData.filter((x) => x.id !== dataId)
        setTodoData(newTodoData);
        console.log('newTodoData', newTodoData)
    }


}