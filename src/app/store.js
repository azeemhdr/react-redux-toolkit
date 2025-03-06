import {configureStore} from '@reduxjs/toolkit'; 
import todoReducer from './features/todo/todoSlice';

export const store = configureStore({
	reducer: todoReducer

})


/* notes: 
------------
1. firstly to step-up a store we have to import {configureStore} from redux toolkit, to configure the store.
2. configureStore only receive object. most of the things will object.
3. after setp-up the store we have to make reducers(function). in toolkit reducers known as slices.
4. for setting up slice we have to import createSlice method to start working.
5. i have a use a nanoid method this is a inbuilt method, it work is to give you a unique id.
6. after setp -up this we have to create a initial state  this state show how your state initially shows. eg. empty or some default value, fecting some data...
7. we have to export (name export eg. const todoSlice) it to use it anywhere. we make a slice of this by using createSlice method. slice is larger version on reducer. in create slice we mostly use a object.
8.give a name: "xzy". but name property is predefinied it can not be change value can change eg. name: "todo"
9. initiallState,
10. reducers : {
 in reducers there are property and function.
 eg.
 addTodo: ()=>{}

in reducers we define the function. we get 2 access in reducers 1.state 2. action. it is syntex
eg.
addTodo: (state , action) => {}

	*state give you access to the initialState.
	*action give you access to get the values.
} 
11. To store something in "store" you have to send/dispatch it by using "dispatch react method". dispatch method change the value in store by using reducer.  	
12. to use the component we use "useSelector React method".
13. for sending data to store use "useDispatch method", for using data from store use "useSelect Method".

## short method for store recognization.
reducer:{
		[todoSlice.name]: todoSlice.reducer
	}
*/