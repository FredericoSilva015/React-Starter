import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/todoForm'
import TodoList from './components/todoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Fred react starter!</h2>
        </div>
        <div className="todo-app">
          <TodoForm />
          <TodoList todos={this.props.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
