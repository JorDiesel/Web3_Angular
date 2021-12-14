import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsPrixMoyenComponent } from './stats-prix-moyen.component';

describe('StatsPrixMoyenComponent', () => {
  let component: StatsPrixMoyenComponent;
  let fixture: ComponentFixture<StatsPrixMoyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsPrixMoyenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsPrixMoyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
