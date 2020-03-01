import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllEspeceComponent } from './show-all-espece.component';

describe('ShowAllEspeceComponent', () => {
  let component: ShowAllEspeceComponent;
  let fixture: ComponentFixture<ShowAllEspeceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllEspeceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllEspeceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
