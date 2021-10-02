import { ToDoAction, ToDoActionTypes } from './to-do.actions';
import Todo from "../models/to-do.models";
import { Action } from '@ngrx/store';
export interface ToDoState {
    toDos: Todo[]
}

const initialState: ToDoState = {
    toDos: [
        {
            id: 1234,
            userId: 1,
            title: 'Default To Do',
            completed: false
        }
    ]
}

//reducer functions for post actions
export function toDoReducer(state: ToDoState = initialState, actions: Action){
    let action = actions as ToDoAction;
    // Handle different cases according to dispatched actions
    
    switch(action.type){
        // Add to-do case
        case ToDoActionTypes.ADD_TO_DO:
            return {
                ...state, // copy old state
                toDos: [action.payload, ...state.toDos] // assign new state
        }
        // Get to-do case
        case ToDoActionTypes.LIST_TO_DO :
            return {
                ...state, // copy old state
            }
        // when get sucess in list API and want to pass data from the API to component
        case ToDoActionTypes.LIST_TO_DO_SUCCESS:
            return {
                ...state, // copy old state
                toDos : [...state.toDos, ...action.payload], // push new to-do list
            }
        // Delete to-do case
        case ToDoActionTypes.DELETE_TO_DO:
            let updatedTodos = [...state.toDos];
            let id = action.payload;
            updatedTodos = updatedTodos.filter( ele => ele.id != id);   
            return{
                ...state, // copy old state
                toDos: updatedTodos // assign new state after delete
            }
        // Update to-do case
        case ToDoActionTypes.UPDATE_TO_DO:
            let updatedTodo = [...state.toDos];
            let objToDo = action.payload.id;
            updatedTodo = updatedTodo.map((obj:any,ind:any) =>
                ind === objToDo ? { ...obj, completed: true } : obj
            );
            return{
                ...state, // copy old state
                toDos: updatedTodo // assign new state after delete
            }
        default:
            return {
                ...state
            }
    }
}