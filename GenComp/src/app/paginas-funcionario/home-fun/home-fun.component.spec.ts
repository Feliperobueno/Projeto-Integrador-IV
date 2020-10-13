import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFunComponent } from './home-fun.component';

describe('HomeFunComponent', () => {
  let component: HomeFunComponent;
  let fixture: ComponentFixture<HomeFunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
