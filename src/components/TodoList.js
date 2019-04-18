import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { todos, clearList, removeTodo } = this.props;
    return (
      <div>
        <ul className="list-group my-5">
          <h3 className="text-capitalize text-center">todo list</h3>
          {todos.map(todo => {
            return <TodoItem key={todo.id} todo={todo.todo} removeTodo={() => removeTodo(todo.id)}/>;
          })}

          <button
            type="button"
            className="btn btn-danger btn-block text-capitalize mt-5"
            onClick={clearList}
          >
            clear list
          </button>
        </ul>
      </div>
    );
  }
}
