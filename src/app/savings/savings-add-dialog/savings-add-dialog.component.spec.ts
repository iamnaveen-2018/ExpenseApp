import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsAddDialogComponent } from './savings-add-dialog.component';

describe('SavingsAddDialogComponent', () => {
  let component: SavingsAddDialogComponent;
  let fixture: ComponentFixture<SavingsAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavingsAddDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingsAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
