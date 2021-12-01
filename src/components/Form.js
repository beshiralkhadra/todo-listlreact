import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div>
        <input
          name="todo"
          type="text"
          value={this.props.inputValue}
          placeholder="your list"
          onChange={this.props.willonchange}
        />
        <button onClick={this.props.willsubmit}>share</button>
      </div>
    );
  }
}

export default Form;
