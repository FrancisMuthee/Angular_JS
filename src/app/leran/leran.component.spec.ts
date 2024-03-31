import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeranComponent } from './leran.component';

describe('LeranComponent', () => {
  let component: LeranComponent;
  let fixture: ComponentFixture<LeranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeranComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
