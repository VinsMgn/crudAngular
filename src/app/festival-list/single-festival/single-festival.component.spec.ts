import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFestivalComponent } from './single-festival.component';

describe('SingleFestivalComponent', () => {
  let component: SingleFestivalComponent;
  let fixture: ComponentFixture<SingleFestivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleFestivalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFestivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
