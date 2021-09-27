import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteToDosComponent } from './delete-to-dos.component';

describe('DeleteToDosComponent', () => {
  let component: DeleteToDosComponent;
  let fixture: ComponentFixture<DeleteToDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteToDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteToDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
