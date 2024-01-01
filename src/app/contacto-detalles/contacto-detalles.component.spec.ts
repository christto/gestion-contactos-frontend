import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoDetallesComponent } from './contacto-detalles.component';

describe('ContactoDetallesComponent', () => {
  let component: ContactoDetallesComponent;
  let fixture: ComponentFixture<ContactoDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
