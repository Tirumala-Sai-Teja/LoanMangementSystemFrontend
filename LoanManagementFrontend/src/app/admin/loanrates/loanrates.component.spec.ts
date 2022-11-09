import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanratesComponent } from './loanrates.component';

describe('LoanratesComponent', () => {
  let component: LoanratesComponent;
  let fixture: ComponentFixture<LoanratesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanratesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
