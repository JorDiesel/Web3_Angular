import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauEvenementComponent } from './tableau-evenement.component';

describe('TableauEvenementComponent', () => {
  let component: TableauEvenementComponent;
  let fixture: ComponentFixture<TableauEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauEvenementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
