import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import AppState from 'src/app/models/to-do-state.model';
import { deleteToDoAction, getToDoAction, updateToDoAction } from '../../../store/to-do.actions';

@Component({
  selector: 'app-list-to-dos',
  templateUrl: './list-to-dos.component.html',
  styleUrls: ['./list-to-dos.component.scss']
})
export class ListToDosComponent implements OnInit {

  toDoList:any = []; // To-do list array
  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    // Get To-do list
    this.store.select(store => store.toDo).subscribe(data => {this.toDoList = data.toDos});
    this.store.dispatch(new getToDoAction());
  }

  //Delete To-Do List
  deleteToDo(toDoId:any){
    // dispatch to-do delete event 
    this.store.dispatch(new deleteToDoAction(toDoId));
  }

  // mark to-do state to complete
  taskStateChange(event:any, index:any){
    // if task is marked as completed
    if(event.target.value === 'on'){
      // mark to-do completed
      this.toDoList = this.toDoList.map((obj:any,ind:any) =>
        ind === index ? { ...obj, completed: true } : obj
      ); 
      // dispatch to-do update event
      this.store.dispatch(new updateToDoAction(this.toDoList[index]));
    }
  }

}
