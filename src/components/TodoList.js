import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div>
        <ul className="list-group my-5">
          <h3 className="text-capitalize text-center">todo list</h3>
          {todos.map(todo => {
            return <TodoItem key={todo.id} todo={todo.todo} />;
          })}

          <button
            type="button"
            className="btn btn-danger btn-block text-capitalize mt-5"
          >
            clear list
          </button>
        </ul>
      </div>
    );
  }
}
