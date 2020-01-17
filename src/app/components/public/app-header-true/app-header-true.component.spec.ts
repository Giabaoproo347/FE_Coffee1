import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeaderTrueComponent } from './app-header-true.component';

describe('AppHeaderTrueComponent', () => {
  let component: AppHeaderTrueComponent;
  let fixture: ComponentFixture<AppHeaderTrueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHeaderTrueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeaderTrueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
