import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFestivalComponent } from './manage-festival.component';

describe('ManageFestivalComponent', () => {
  let component: ManageFestivalComponent;
  let fixture: ComponentFixture<ManageFestivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageFestivalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageFestivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
