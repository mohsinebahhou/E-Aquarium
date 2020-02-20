import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddEspeceComponent } from './form-add-espece.component';

describe('FormAddEspeceComponent', () => {
  let component: FormAddEspeceComponent;
  let fixture: ComponentFixture<FormAddEspeceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddEspeceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddEspeceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
