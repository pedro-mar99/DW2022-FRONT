import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaNacionalidadComponent } from './nueva-nacionalidad.component';

describe('NuevaNacionalidadComponent', () => {
  let component: NuevaNacionalidadComponent;
  let fixture: ComponentFixture<NuevaNacionalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaNacionalidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaNacionalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
