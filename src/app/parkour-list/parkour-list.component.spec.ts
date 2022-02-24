import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkourListComponent } from './parkour-list.component';

describe('ParkourListComponent', () => {
  let component: ParkourListComponent;
  let fixture: ComponentFixture<ParkourListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkourListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkourListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
