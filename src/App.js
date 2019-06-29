import React from 'react';
import TodoItems from "./components/TodoItems";
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      input : "",
      todos : []
    }

    this.handleEnter = (event) =>{
        if(event.keyCode === 13){
          this.setState((prevState) => {
            return {
              todos: [
                ...prevState.todos,
               this.state.input.value,
              ]
            };
          });
        }
      }

    this.clear=(event)=>{
      if(event.keyCode === 13){
      event.target.value = ""}
    }

    this.handleInput=(event)=>{
     this.setState({
      input : event.target
     })
    }
  }

  render(){
    return (
      <div className="todo-list" >
      <div>
        <label className="selectAll">
          ❯
        </label>
          <input 
            id="add"
            type="text" 
            placeholder="What needs to be done?" 
            onFocus={this.handleInput}
            onKeyDown={this.handleEnter}
            onKeyUp={this.clear}/>
        <div/>
        <TodoItems text={this.state.todos}/>
      </div>
    )
  }
}

export default App;
