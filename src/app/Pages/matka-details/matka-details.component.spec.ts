import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatkaDetailsComponent } from './matka-details.component';

describe('MatkaDetailsComponent', () => {
  let component: MatkaDetailsComponent;
  let fixture: ComponentFixture<MatkaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatkaDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatkaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
