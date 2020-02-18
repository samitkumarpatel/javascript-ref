import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial8Component } from './tutorial8.component';

describe('Tutorial8Component', () => {
  let component: Tutorial8Component;
  let fixture: ComponentFixture<Tutorial8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tutorial8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
