import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToDosComponent } from './add-to-dos.component';

describe('AddToDosComponent', () => {
  let component: AddToDosComponent;
  let fixture: ComponentFixture<AddToDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
