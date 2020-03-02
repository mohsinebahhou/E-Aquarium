import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherActiviteComponent } from './rechercher-activite.component';

describe('RechercherActiviteComponent', () => {
  let component: RechercherActiviteComponent;
  let fixture: ComponentFixture<RechercherActiviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercherActiviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercherActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
