import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

class App extends Component {
  state = {
    todos: [],
    id: uuid(),
    todo: '',
    editItem: false
  };

  inputChangeHandler = e => {
    this.setState({
      todo: e.target.value
    })
    console.log(this.state.todo);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: this.state.id,
      todo: this.state.todo
    };

    const updatedTodos = [...this.state.todos, newTodo];
    this.setState({
      todos: updatedTodos,
      todo: '',
      id: uuid(),
      editItem: false
    })

  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              todo={this.state.todo}
              handleChange={this.inputChangeHandler}
              handleSubmit={this.handleSubmit}
            />
            <TodoList todos={this.state.todos}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
