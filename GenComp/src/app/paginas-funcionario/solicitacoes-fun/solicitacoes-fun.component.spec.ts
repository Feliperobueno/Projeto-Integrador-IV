import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacoesFunComponent } from './solicitacoes-fun.component';

describe('SolicitacoesFunComponent', () => {
  let component: SolicitacoesFunComponent;
  let fixture: ComponentFixture<SolicitacoesFunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitacoesFunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitacoesFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
