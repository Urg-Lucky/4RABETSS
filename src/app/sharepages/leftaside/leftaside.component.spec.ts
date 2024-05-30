import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftasideComponent } from './leftaside.component';

describe('LeftasideComponent', () => {
  let component: LeftasideComponent;
  let fixture: ComponentFixture<LeftasideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftasideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftasideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
