import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFeedbacksComponent } from './update-feedbacks.component';

describe('UpdateFeedbacksComponent', () => {
  let component: UpdateFeedbacksComponent;
  let fixture: ComponentFixture<UpdateFeedbacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateFeedbacksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateFeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
