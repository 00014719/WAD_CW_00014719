import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFeedbacksComponent } from './create-feedbacks.component';

describe('CreateFeedbacksComponent', () => {
  let component: CreateFeedbacksComponent;
  let fixture: ComponentFixture<CreateFeedbacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateFeedbacksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateFeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
