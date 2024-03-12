import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFeedbacksComponent } from './delete-feedbacks.component';

describe('DeleteFeedbacksComponent', () => {
  let component: DeleteFeedbacksComponent;
  let fixture: ComponentFixture<DeleteFeedbacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteFeedbacksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteFeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
