import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesativadosComponent } from './desativados.component';

describe('DesativadosComponent', () => {
  let component: DesativadosComponent;
  let fixture: ComponentFixture<DesativadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesativadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesativadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
