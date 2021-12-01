import React, { Component } from "react";
import Form from "./Form";
import ToDoList from "./ToDoList";
export class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      inputText: { text: "", id: "" },
    };
  }
  handleonChange = (e) => {
    this.setState({
      inputText: {
        text: e.target.value,
        id: Math.random() * 1000,
      },
    });
  };
  deletingTodos = (id) => {
    const beshir = this.state.todo.filter((val) => val.id !== id);
    this.setState(
      {
        todo: beshir,
      },
      console.log(this.state.todo)
    );
  };
  willsubmit = (e) => {
    e.preventDefault();

    let newDataInput = this.state.inputText;

    let newTodo = [...this.state.todo, newDataInput];
    this.setState({
      todo: newTodo,
    });
    console.log(this.state.todo);
  };
  render() {
    return (
      <div>
        <Form
          willonchange={this.handleonChange}
          willsubmit={this.willsubmit}
          //   todo={this.state.todo}
          inputValue={this.state.inputText.text}
        />
        {this.state.todo.map((todos) => (
          <ToDoList
            todo={todos.text}
            key={todos.id}
            bek={todos.id}
            deletingTodos={this.deletingTodos}
          />
        ))}
      </div>
    );
  }
}

export default ToDo;
