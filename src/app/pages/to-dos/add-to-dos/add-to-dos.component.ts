import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-to-dos',
  templateUrl: './add-to-dos.component.html',
  styleUrls: ['./add-to-dos.component.scss']
})
export class AddToDosComponent implements OnInit {

  toDoForm: FormGroup;

  constructor() {
    // Declare the form here to add the to dos
    this.toDoForm = new FormGroup({
        userId: new FormControl(1, []),
        title: new FormControl('', [Validators.required]),
        completed: new FormControl(false, [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  submitToDo(){
    // If the form is invalid then not allow to submit it
    if(this.toDoForm.invalid){
      return;
    }
    // Dos when form is valid
    console.log(this.toDoForm.value);
    // Assign random nuber as ID
    this.toDoForm.value.id = Math.floor(Math.random() * 10);
    
    //Dispatch the add to-do event


  }

}
