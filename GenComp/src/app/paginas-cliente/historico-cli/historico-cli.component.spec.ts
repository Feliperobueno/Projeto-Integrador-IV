import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoCliComponent } from './historico-cli.component';

describe('HistoricoCliComponent', () => {
  let component: HistoricoCliComponent;
  let fixture: ComponentFixture<HistoricoCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
