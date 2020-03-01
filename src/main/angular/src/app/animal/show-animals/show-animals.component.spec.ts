import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAnimalsComponent } from './show-animals.component';

describe('ShowAnimalsComponent', () => {
  let component: ShowAnimalsComponent;
  let fixture: ComponentFixture<ShowAnimalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAnimalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
