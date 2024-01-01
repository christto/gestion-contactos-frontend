import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarContactoComponent } from './registrar-contacto.component';

describe('RegistrarContactoComponent', () => {
  let component: RegistrarContactoComponent;
  let fixture: ComponentFixture<RegistrarContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
