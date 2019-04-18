import React, { Component } from 'react'

export default class TodoItem extends Component {
  
  render() {
    const { todo, removeTodo } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between align-items-center my-2">
        <h6 className="mb-0">{todo}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success"><i className="fas fa-pen"></i></span>
          <span className="mx-2 text-danger" onClick={removeTodo}><i className="fas fa-trash"></i></span>
        </div>
      </li>
    )
  }
}
