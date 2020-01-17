import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHompageTrueComponent } from './app-hompage-true.component';

describe('AppHompageTrueComponent', () => {
  let component: AppHompageTrueComponent;
  let fixture: ComponentFixture<AppHompageTrueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHompageTrueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHompageTrueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
