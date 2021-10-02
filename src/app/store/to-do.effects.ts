
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { addToDoAction, ToDoActionTypes, getToDoAction, getToDoActionSuccess, deleteToDoAction, updateToDoAction } from './to-do.actions';
import { ApiService } from '../services/api.service';

@Injectable()
export class ToDoEffects {

  constructor(
    private actions$: Actions,
    private service: ApiService) { }

  // HTTP Call for submit Add To-Do Request
  @Effect() addToDo$ = this.actions$
    .pipe(
      ofType<addToDoAction>('ADD_TO_DO'),
      mergeMap(
        (data) => this.service.post(data.payload)
          .pipe(
            map(data2 => {
              console.log(data2);
              return data2;
            }),
            catchError(error => {
              return (error);
            }
            )
          )
      ),
    )

  // HTTP Call for get To-Do Request
  @Effect() getToDos$ = this.actions$
    .pipe(
      ofType<getToDoAction>(ToDoActionTypes.LIST_TO_DO),
      mergeMap(
        () => this.service.get()
          .pipe(
            map((data: any) => {
              return new getToDoActionSuccess(data);
            }),
            catchError(error => {
              return error;
            }
              // of(new GetPostsFailAction(error))
            )
          )
      ),
    )

    // HTTP Call for delete To-Do Request
    @Effect() deleteToDo$ = this.actions$
    .pipe(
      ofType<deleteToDoAction>(ToDoActionTypes.DELETE_TO_DO),
      mergeMap(
        (data) => this.service.delete(data.payload)
          .pipe(
            map((data: any) => {
              return data;
            }),
            catchError(error => {
              return error;
            }
            )
          )
      ),
    )

    // HTTP Call for update To-Do Request
    @Effect() updateToDo$ = this.actions$
    .pipe(
      ofType<updateToDoAction>(ToDoActionTypes.UPDATE_TO_DO),
      mergeMap(
        (data) => this.service.put(data.payload)
          .pipe(
            map((data: any) => {
              return data;
            }),
            catchError(error => {
              return error;
            }
            )
          )
      ),
    )

}
