import React, { useState } from 'react';
import TodoItem from "./components/TodoItem";

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodoItem = () => {
    setTodoList([
      ...todoList,
      { title: inputValue, checked: false, id: todoList.length + 1 }
    ])
  }

  const deleteTodoItem = (id) => {
    const todoListFiltered = todoList.filter((item) => item.id !== id);
    setTodoList(todoListFiltered);
  }

  const onChangeInput = (event) => setInputValue(event.target.value);

  return (
    <div className="container">
      <div className="todo__list">
        <h1>ToDoList by Maksimka</h1>
        <div className="create__new-todo">
          <input
            value={inputValue}
            type="text"
            className="message"
            placeholder="Описание задания"
            onChange={onChangeInput}
          />
          <button
            type="button"
            className="add"
            onClick={addTodoItem}
          >
            Добавить
          </button>
        </div>
        <div className="list">
          <ul className="todo">
            {todoList.map((item) => (
              <TodoItem
                key={item.id}
                id={item.id}
                title={item.title}
                onDelete={deleteTodoItem}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo;
