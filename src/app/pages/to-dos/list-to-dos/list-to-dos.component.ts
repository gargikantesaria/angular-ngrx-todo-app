import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import AppState from 'src/app/models/to-do-state.model';
import { getToDoAction } from '../../../store/to-do.actions';

@Component({
  selector: 'app-list-to-dos',
  templateUrl: './list-to-dos.component.html',
  styleUrls: ['./list-to-dos.component.scss']
})
export class ListToDosComponent implements OnInit {

  toDoList:any = [];
  constructor(private store: Store<AppState>) {
   
  }

  ngOnInit(): void {
    this.store.select(store => store.toDo).subscribe(data => {this.toDoList = data.toDos});
    this.store.dispatch(new getToDoAction());
    console.log(this.toDoList);

  }

}
