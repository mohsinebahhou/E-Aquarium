import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddAnimalComponent } from './form-add-animal.component';

describe('FormAddAnimalComponent', () => {
  let component: FormAddAnimalComponent;
  let fixture: ComponentFixture<FormAddAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
