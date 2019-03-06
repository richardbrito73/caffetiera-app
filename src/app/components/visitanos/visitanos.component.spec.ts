import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitanosComponent } from './visitanos.component';

describe('VisitanosComponent', () => {
  let component: VisitanosComponent;
  let fixture: ComponentFixture<VisitanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitanosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
