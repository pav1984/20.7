import React from 'react';
import style from './TodoList.css';

const TodoList = props => {
    let listTodo = props.data.map(function(item) {
        return (
            <ul className={style.TodoList}>
            
            
            </ul>
        )
    }) 

    
}




export default TodoList;