import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../app/features/todo/todoSlice";
export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-[#f9a702] p-3">
        <h2 className="text-red-600 font-semibold p-3 ">TODO's</h2>
        {todos.map((item) => (
          <li key={item.id} className="w-full flex justify-between items-center gap-5 ps-5  bg-white rounded-md">
            <div className="w-full text-start text-green-900 font-semibold capitalize">{item.text}</div>
            <button onClick={() => dispatch(removeTodo(item.id))}>X</button>
          </li>
        ))}
      </div>
    </>
  );
}
