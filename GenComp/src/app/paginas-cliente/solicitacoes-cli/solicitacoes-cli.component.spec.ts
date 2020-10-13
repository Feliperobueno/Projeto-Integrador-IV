import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacoesCliComponent } from './solicitacoes-cli.component';

describe('SolicitacoesCliComponent', () => {
  let component: SolicitacoesCliComponent;
  let fixture: ComponentFixture<SolicitacoesCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitacoesCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitacoesCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
