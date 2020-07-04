import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteVisualizarComponent } from './cliente-visualizar.component';

describe('ClienteVisualizarComponent', () => {
  let component: ClienteVisualizarComponent;
  let fixture: ComponentFixture<ClienteVisualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteVisualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
