import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightasideComponent } from './rightaside.component';

describe('RightasideComponent', () => {
  let component: RightasideComponent;
  let fixture: ComponentFixture<RightasideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightasideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightasideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
