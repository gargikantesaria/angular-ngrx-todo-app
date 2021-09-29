
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { addToDoAction, ToDoActionTypes, getToDoAction, getToDoActionSuccess } from './to-do.actions';
import { ApiService } from '../services/api.service';

@Injectable()
export class ToDoEffects {

constructor(
    private actions$: Actions,
    private service: ApiService) { }

    // HTTP Call for submit Add Post Request
@Effect() addPost$ = this.actions$
    .pipe(
      ofType<addToDoAction>('ADD_TO_DO'),
      mergeMap(
        (data) => this.service.post(data.payload)
          .pipe(
            map(data2 => {
                console.log(data2);
                return data2;
                // return new AddPostSuccessAction(data.payload)
            }),
            catchError(error =>
                {
                    return (error);
                } 
                // of(new AddPostFailAction(error))
            )
          )
      ),
  )

    // HTTP Call for get Post Request
@Effect() getPosts$ = this.actions$
    .pipe(
      ofType<getToDoAction>(ToDoActionTypes.LIST_TO_DO),
      mergeMap(
        () => this.service.get()
          .pipe(
            map((data:any) => {
              return new getToDoActionSuccess(data);                // return new GetPostsSuccessAction(data)
            }),
            catchError(error => 
              {
                return error;
              }
              // of(new GetPostsFailAction(error))
            )
          )
      ),
  )

}
