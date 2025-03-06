import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../app/features/todo/todoSlice";
export default function Todo() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

	return (
    <>
      <div>TODO's</div>
	  {todos.map((item) => (
		<li key={item.id}>
			{item.text}
			<button onClick={()=>dispatch(removeTodo(item.id))}>X</button>
		</li>
))}
    </>
  );
}
