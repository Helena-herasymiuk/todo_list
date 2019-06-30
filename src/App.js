import React from 'react';
import TodoItems from './components/TodoItems';
import './App.css';
import NewToDo from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      todos: []
    };

    this.handleEnter = (event) =>{
      if (event.keyCode === 13 && this.state.input.value !== '') {
        this.setState((prevState) => {
          return {
            todos: [
              ...prevState.todos,
              this.state.input.value
            ]
          };
        });
      }
      console.log(this.state.todos);
    };

    this.clear = (event) => {
      if (event.keyCode === 13) {
        event.target.value = '';
      }
    };

    this.handleInput = (event) => {
      this.setState({
        input: event.target
      });
    };

    this.handleCheck = (event) => {
      const checkButon = event.target.previousElementSibling;
      const toDoItem = checkButon.parentElement;
      if (!checkButon.checked) {
        checkButon.checked = true;
        toDoItem.classList.add('completed');
        toDoItem.classList.toggle('active');
      } else {
        checkButon.checked = false;
        toDoItem.classList.toggle('completed');
        toDoItem.classList.toggle('active');
      }
    };

    this.deleteItem = (event) => {
      const todo = event.target.previousElementSibling.textContent;
      const todos = this.state.todos;
      todos.remove(todo);
      this.setState({ todos: todos });
    };
  }

  // eslint-disable-next-line class-methods-use-this
  chooseAll() {
    const checks = document.querySelectorAll('.input-check');
    if ([...checks].every(item => item.checked === true)) {
      [...checks].forEach(check => check.checked = false);
    } else {
      [...checks].forEach(check => check.checked = true);
    }
  }

  render() {
    return (
      <div className='App'>
        <p className='App-name'>todos</p>
        <div className='todo-block'>
          <NewToDo handleInput={this.handleInput}
                   handleEnter={this.handleEnter}
                   clear={this.clear}
                   chooseAll={this.chooseAll}/>
          <div className="todo-list" >
            <TodoItems text={this.state.todos}
                       check={this.handleCheck}
                       deleteItem={this.deleteItem}/>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

// eslint-disable-next-line no-extend-native
Array.prototype.remove = function (value) {
  let idx = this.indexOf(value);
  if (idx !== -1) {
    return this.splice(idx, 1);
  }
  return false;
};

export default App;
