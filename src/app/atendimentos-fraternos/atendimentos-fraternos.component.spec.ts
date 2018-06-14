import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendimentosFraternosComponent } from './atendimentos-fraternos.component';

describe('AtendimentosFraternosComponent', () => {
  let component: AtendimentosFraternosComponent;
  let fixture: ComponentFixture<AtendimentosFraternosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtendimentosFraternosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtendimentosFraternosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
