import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraMeusTreinosComponent } from './mostra-meus-treinos.component';

describe('MostraMeusTreinosComponent', () => {
  let component: MostraMeusTreinosComponent;
  let fixture: ComponentFixture<MostraMeusTreinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostraMeusTreinosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostraMeusTreinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
