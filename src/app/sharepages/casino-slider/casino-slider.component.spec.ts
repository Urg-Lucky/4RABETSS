import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoSliderComponent } from './casino-slider.component';

describe('CasinoSliderComponent', () => {
  let component: CasinoSliderComponent;
  let fixture: ComponentFixture<CasinoSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasinoSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasinoSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
