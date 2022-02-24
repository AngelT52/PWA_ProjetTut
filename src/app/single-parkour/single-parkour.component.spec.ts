import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleParkourComponent } from './single-parkour.component';

describe('SingleParkourComponent', () => {
  let component: SingleParkourComponent;
  let fixture: ComponentFixture<SingleParkourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleParkourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleParkourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
