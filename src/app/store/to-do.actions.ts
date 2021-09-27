import { Action } from '@ngrx/store';

export default interface Todo{
    id?: number,
    userId: number,
    title: string,
    completed: boolean
}

// Action class for add to-do event
export class addToDoAction implements Action{
    readonly type = 'ADD_TO_DO';
    constructor(public payload: Todo){}
}

// To export multiple action easily  executable in one word like 'ToDoAction.addToDoAction'
export type ToDoAction = addToDoAction;