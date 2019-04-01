import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianPortalComponent } from './physician-portal.component';

describe('PhysicianPortalComponent', () => {
  let component: PhysicianPortalComponent;
  let fixture: ComponentFixture<PhysicianPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicianPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicianPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
