import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseBundleComponent } from './expense-bundle.component';

describe('ExpenseBundleComponent', () => {
  let component: ExpenseBundleComponent;
  let fixture: ComponentFixture<ExpenseBundleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseBundleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
