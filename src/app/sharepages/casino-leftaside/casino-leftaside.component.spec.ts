import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoLeftasideComponent } from './casino-leftaside.component';

describe('CasinoLeftasideComponent', () => {
  let component: CasinoLeftasideComponent;
  let fixture: ComponentFixture<CasinoLeftasideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasinoLeftasideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasinoLeftasideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
