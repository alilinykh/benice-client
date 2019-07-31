import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeAndBodyComponent } from './badge-and-body.component';

describe('BadgeAndBodyComponent', () => {
  let component: BadgeAndBodyComponent;
  let fixture: ComponentFixture<BadgeAndBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeAndBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeAndBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
