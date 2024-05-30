import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatkaComponent } from './matka.component';

describe('MatkaComponent', () => {
  let component: MatkaComponent;
  let fixture: ComponentFixture<MatkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatkaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
