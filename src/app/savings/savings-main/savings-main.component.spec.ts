import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsMainComponent } from './savings-main.component';

describe('SavingsMainComponent', () => {
  let component: SavingsMainComponent;
  let fixture: ComponentFixture<SavingsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavingsMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
