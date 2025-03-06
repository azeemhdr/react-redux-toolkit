import { createSlice , nanoid} from "@reduxjs/toolkit";

const initialState = {
	todos: [{id:1, text: "hello world"}]
}

export const todoSlice = createSlice({
	name:"todo",
	initialState,
	reducers:{
	addTodo: (state , action)=>{
		const todo = {
			id: nanoid(), 
			text: action.payload,  
		}
		state.todos.push(todo)
	},
	updateTodo:(state , action) => {
		const {id, text} = action.payload;
		const todo = state.todos.find((todo) => todo.id === id);
		if (todo){
			todo.text = text
		}
	},
	removeTodo: (state , action)=>{
		state.todos = state.todos.filter((todo) => todo.id !== action.payload)
	},		
	}
})

export const{addTodo,removeTodo,updateTodo} = todoSlice.actions

export default   todoSlice.reducer
// payload is an object u can extract anything in payload

// u have too export it twice to use every where in components.