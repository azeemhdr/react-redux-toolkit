import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../app/features/todo/todoSlice";
export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState();
  const [editText, setEditText] = useState("");

  const editHandler = (e) => {
    setEditId(e.id);
    setEditText(e.text);
  };

  const updateHandler = () => {
    dispatch(updateTodo({ id: editId, text: editText }));
    setEditId();
    setEditText("");
  };

  return (
    <>
      <div className="bg-[#f9a702] p-3">
        <h2 className="text-red-600 font-semibold p-3 ">TODO's</h2>
        {todos.map((item) => (
          <li key={item.id} className="w-full flex justify-between items-center gap-5 ps-5 bg-white rounded-md mb-2">
		  {editId === item.id ? (
			<input 
			  type="text" 
			  value={editText} 
			  onChange={(e) => setEditText(e.target.value)} 
			  className="w-full text-start text-green-900 font-semibold capitalize"
			/>
		  ) : (
			<div className="w-full text-start text-green-900 font-semibold capitalize">
			  {item.text}
			</div>
		  )}
		  
           <div className="flex gap-1">
			  {editId === item.id ? (
				<button onClick={updateHandler} className="bg-green-600 text-white px-2 rounded">
				  Update
				</button>
			  ) : (
				<button onClick={() => editHandler(item)} className="bg-blue-600 text-white px-2 rounded">
				  Edit
				</button>
			  )}
			  <button onClick={() => dispatch(removeTodo(item.id))} className="bg-red-600 text-white px-2 rounded">
				X
			  </button>
			</div>
          </li>
        ))}
      </div>
    </>
  );
}
