import React from 'react';

function TodoItems( props ) {
  return (
    props.text.map((item, i) => {
      return (
        <div className="todo-item active"
               key={item + i}>
          <input type="checkbox"
                 className='input-check'/>
          <label onClick={props.check}
                 className='todo'>
             {item}
          </label>
          <button onClick={props.deleteItem}
                  className='delete-item'>
            X
          </button>
        </div>);
    })
  );
}

export default TodoItems;
