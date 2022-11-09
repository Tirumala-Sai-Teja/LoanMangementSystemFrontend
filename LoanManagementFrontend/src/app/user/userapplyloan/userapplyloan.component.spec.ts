import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserapplyloanComponent } from './userapplyloan.component';

describe('UserapplyloanComponent', () => {
  let component: UserapplyloanComponent;
  let fixture: ComponentFixture<UserapplyloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserapplyloanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserapplyloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
