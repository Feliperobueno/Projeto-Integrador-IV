import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoFunComponent } from './historico-fun.component';

describe('HistoricoFunComponent', () => {
  let component: HistoricoFunComponent;
  let fixture: ComponentFixture<HistoricoFunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoFunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
