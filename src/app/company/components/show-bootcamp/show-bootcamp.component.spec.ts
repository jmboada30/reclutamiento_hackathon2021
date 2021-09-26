import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBootcampComponent } from './show-bootcamp.component';

describe('ShowBootcampComponent', () => {
  let component: ShowBootcampComponent;
  let fixture: ComponentFixture<ShowBootcampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBootcampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBootcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
