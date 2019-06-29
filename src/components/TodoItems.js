import React from "react";

function TodoItems(props) {
 	return(
 		<>
		{props.text.map((item,i)=>{
			return(<div className="todo-item"
					  key={item + i}>
		            <input type="checkbox" />
		            <p>{item}</p>
				</div>)
		})}
		</>
	)
 } 

export default TodoItems;