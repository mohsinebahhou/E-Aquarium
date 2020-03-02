import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddAffectationComponent } from './form-add-affectation.component';

describe('FormAddAffectationComponent', () => {
  let component: FormAddAffectationComponent;
  let fixture: ComponentFixture<FormAddAffectationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddAffectationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddAffectationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
