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
                ...state, 
                toDos : [...state.toDos, ...action.payload],
            }
        default:
            return {
                ...state
            }
    }
}