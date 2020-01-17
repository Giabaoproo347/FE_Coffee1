import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFooterTrueComponent } from './app-footer-true.component';

describe('AppFooterTrueComponent', () => {
  let component: AppFooterTrueComponent;
  let fixture: ComponentFixture<AppFooterTrueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFooterTrueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFooterTrueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
