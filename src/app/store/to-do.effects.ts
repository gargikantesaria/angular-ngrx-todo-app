
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as ToDoAction from './to-do.actions';
import { ApiService } from '../services/api.service';

@Injectable()
export class ToDoEffects {

constructor(
    private actions$: Actions,
    private service: ApiService) { }

@Effect() addPost$ = this.actions$
    .pipe(
      ofType<ToDoAction.addToDoAction>('ADD_TO_DO'),
      mergeMap(
        (data) => this.service.post(data.payload)
          .pipe(
            map(data2 => {
                console.log(data2);
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
}
