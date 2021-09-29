import { Action } from '@ngrx/store';
import Todo from "../models/to-do.models";


export enum ToDoActionTypes {
    ADD_TO_DO = '[TODO] Add To Do',
    
    LIST_TO_DO = '[TODO] Get List To Do',
    LIST_TO_DO_SUCCESS = '[TODO] Get To Do Success'
}


// Action class for add to-do event
export class addToDoAction implements Action{
    readonly type = ToDoActionTypes.ADD_TO_DO;
    constructor(public payload: Todo){}
}

// Action class for get to-do event
export class getToDoAction implements Action{
    readonly type = ToDoActionTypes.LIST_TO_DO;
}

// Action class for getting success in get to-do API call
export class getToDoActionSuccess implements Action{
    readonly type = ToDoActionTypes.LIST_TO_DO_SUCCESS;
    constructor(public payload: Todo[]){}
}


// To export multiple action easily  executable in one word like 'ToDoAction.addToDoAction'
export type ToDoAction = 
addToDoAction | 
getToDoAction | 
getToDoActionSuccess;