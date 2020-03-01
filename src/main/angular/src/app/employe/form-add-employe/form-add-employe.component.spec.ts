import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddEmployeComponent } from './form-add-employe.component';

describe('FormAddEmployeComponent', () => {
  let component: FormAddEmployeComponent;
  let fixture: ComponentFixture<FormAddEmployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddEmployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
