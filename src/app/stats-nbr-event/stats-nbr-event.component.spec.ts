import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsNbrEventComponent } from './stats-nbr-event.component';

describe('StatsNbrEventComponent', () => {
  let component: StatsNbrEventComponent;
  let fixture: ComponentFixture<StatsNbrEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsNbrEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsNbrEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
