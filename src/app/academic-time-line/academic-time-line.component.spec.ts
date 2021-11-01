import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicTimeLineComponent } from './academic-time-line.component';

describe('AcademicTimeLineComponent', () => {
  let component: AcademicTimeLineComponent;
  let fixture: ComponentFixture<AcademicTimeLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicTimeLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicTimeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
