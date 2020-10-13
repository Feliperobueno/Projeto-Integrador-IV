import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilFunComponent } from './perfil-fun.component';

describe('PerfilFunComponent', () => {
  let component: PerfilFunComponent;
  let fixture: ComponentFixture<PerfilFunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilFunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
