import { Action } from "@ngrx/store";
import * as ToDoAction from './to-do.actions';
import Todo from "./to-do.actions";


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
export function toDoReducer(state: ToDoState = initialState, action: Action){
    // Handle different cases according to dispatched actions
    
    switch(action.type){
        // Add post case
        case 'ADD_TO_DO' :
            return {
                ...state, // copy old state
                newState: [...state.toDos, ToDoAction.addToDoAction] // assign new state
        }
        default:
            return {
                ...state
            }
    }
}