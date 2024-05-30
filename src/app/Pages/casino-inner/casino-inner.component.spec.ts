import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoInnerComponent } from './casino-inner.component';

describe('CasinoInnerComponent', () => {
  let component: CasinoInnerComponent;
  let fixture: ComponentFixture<CasinoInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasinoInnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasinoInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
