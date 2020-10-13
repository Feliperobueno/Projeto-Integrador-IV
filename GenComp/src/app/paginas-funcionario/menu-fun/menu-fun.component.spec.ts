import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFunComponent } from './menu-fun.component';

describe('MenuFunComponent', () => {
  let component: MenuFunComponent;
  let fixture: ComponentFixture<MenuFunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuFunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
