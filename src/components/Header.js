import React from 'react';

function NewToDo(props) {
  return (
    <div className="NewToDo">
      <button className="selectAll"
              onClick={props.chooseAll}>
        {'❯'}
      </button>
      <input
        id="add"
        type="text"
        placeholder="What needs to be done?"
        onFocus={props.handleInput}
        onKeyDown={props.handleEnter}
        onKeyUp={props.clear}
        autoFocus>
      </input>
    </div>
  );
}

export default NewToDo;
