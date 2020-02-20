import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddBassinComponent } from './form-add-bassin.component';

describe('FormAddBassinComponent', () => {
  let component: FormAddBassinComponent;
  let fixture: ComponentFixture<FormAddBassinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddBassinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddBassinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
