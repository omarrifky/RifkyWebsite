import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsProudOfComponent } from './things-proud-of.component';

describe('ThingsProudOfComponent', () => {
  let component: ThingsProudOfComponent;
  let fixture: ComponentFixture<ThingsProudOfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThingsProudOfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingsProudOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
