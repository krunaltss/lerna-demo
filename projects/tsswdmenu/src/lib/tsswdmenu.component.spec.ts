import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsswdmenuComponent } from './tsswdmenu.component';

describe('TsswdmenuComponent', () => {
  let component: TsswdmenuComponent;
  let fixture: ComponentFixture<TsswdmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsswdmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsswdmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
