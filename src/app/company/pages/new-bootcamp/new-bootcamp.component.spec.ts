import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBootcampComponent } from './new-bootcamp.component';

describe('NewBootcampComponent', () => {
  let component: NewBootcampComponent;
  let fixture: ComponentFixture<NewBootcampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBootcampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBootcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
