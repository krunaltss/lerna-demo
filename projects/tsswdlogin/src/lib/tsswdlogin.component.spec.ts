import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsswdloginComponent } from './tsswdlogin.component';

describe('TsswdloginComponent', () => {
  let component: TsswdloginComponent;
  let fixture: ComponentFixture<TsswdloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsswdloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsswdloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
