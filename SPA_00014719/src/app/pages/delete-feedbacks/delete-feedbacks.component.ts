import { Component } from '@angular/core';
import { Feedback } from '../../services/models/feedback.model';
import { FeedbackService } from '../../services/feedback.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-feedbacks',
  standalone: true,
  imports: [],
  templateUrl: './delete-feedbacks.component.html',
  styleUrl: './delete-feedbacks.component.css'
})
export class DeleteFeedbacksComponent {
  feedback: Feedback = {
    id: 0,
    title: '',
    description: '',
    teacher: { 
      id: 0, 
      firstName: '', 
      lastName: ''
    }
  }

  feedbackId: number = 0;

  constructor(private route: ActivatedRoute,
    private feedbackService : FeedbackService, 
    private router : Router) {}

    
    ngOnInit(): void {
      const feedbackId = this.route.snapshot.paramMap.get('id');
      this.feedbackId = feedbackId ? + feedbackId : 0;    
      this.getFeedback(this.feedbackId);
    }

    getFeedback(id: number): void {
      this.feedbackService.getFeedback(id)
        .subscribe(feedback => {
          this.feedback = feedback
        });
    }
  deleteFeedback(): void{
    this.feedbackService.deleteFeedback(this.feedbackId)
      .subscribe(
        response => {
            this.router.navigate(['/feedbacks']);
        },
        error => console.log(error)
      );
  }

  cancelDelete(): void{
    this.router.navigate(['/feedbacks']);
  }
}
