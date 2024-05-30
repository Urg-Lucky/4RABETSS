import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesframeComponent } from './gamesframe.component';

describe('GamesframeComponent', () => {
  let component: GamesframeComponent;
  let fixture: ComponentFixture<GamesframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesframeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
