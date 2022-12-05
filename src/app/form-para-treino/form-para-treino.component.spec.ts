import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormParaTreinoComponent } from './form-para-treino.component';

describe('FormParaTreinoComponent', () => {
  let component: FormParaTreinoComponent;
  let fixture: ComponentFixture<FormParaTreinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormParaTreinoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormParaTreinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
