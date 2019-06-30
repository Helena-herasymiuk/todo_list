import React from 'react';

function Footer(props) {
  return (
    <footer className="footer">
      <div className="todo-count">
        {props.count} items left
      </div>
      <div className="filters">
        <button className="selected footer-buttons">
          All
        </button>
        <button className="footer-buttons">
          Active
        </button>
        <button className="footer-buttons">
          Completed
        </button>
      </div>
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}

export default Footer;
