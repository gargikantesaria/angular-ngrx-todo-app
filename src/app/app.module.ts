import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddToDosComponent } from './pages/to-dos/add-to-dos/add-to-dos.component';
import { DeleteToDosComponent } from './pages/to-dos/delete-to-dos/delete-to-dos.component';
import { ListToDosComponent } from './pages/to-dos/list-to-dos/list-to-dos.component';
import { StoreModule } from '@ngrx/store';
import { toDoReducer } from './store/to-do.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ToDoEffects } from './store/to-do.effects';

@NgModule({
  declarations: [
    AppComponent,
    AddToDosComponent,
    DeleteToDosComponent,
    ListToDosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      toDo: toDoReducer
    }, {}),
    EffectsModule.forRoot([
      ToDoEffects
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
