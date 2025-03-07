import { createSlice , nanoid} from "@reduxjs/toolkit";

const initialState = {
	todos: [{id:1, text: "hello world"}],
	editTodo:{}
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
		const todoUpdate ={
			id: action.payload.id,
			text: action.payload.text,
		}
		
		const todo = state.todos.find((item) => item.id === todoUpdate.id);
		if (todo){
			todo.text = todoUpdate.text
		}
	
	},
	setEdittodo:(state,action)=>{
		console.log('dddd')
		state.editTodo = action.payload
	},
	removeTodo: (state , action)=>{
		state.todos = state.todos.filter((item) => item.id !== action.payload)
	},		
	}
})

export const{addTodo,removeTodo,updateTodo,setEdittodo} = todoSlice.actions

export default   todoSlice.reducer
// payload is an object u can extract anything in payload

// u have too export it twice to use every where in components.