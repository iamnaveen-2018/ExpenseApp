import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryDetailsAddComponent } from './salary-details-add.component';

describe('SalaryDetailsAddComponent', () => {
  let component: SalaryDetailsAddComponent;
  let fixture: ComponentFixture<SalaryDetailsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalaryDetailsAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryDetailsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
