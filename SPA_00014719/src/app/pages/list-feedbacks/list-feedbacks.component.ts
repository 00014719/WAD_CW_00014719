import { Component, OnInit } from '@angular/core';
import { Feedback } from '../../services/models/feedback.model';
import { FeedbackService } from '../../services/feedback.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-feedbacks',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list-feedbacks.component.html',
  styleUrl: './list-feedbacks.component.css'
})
export class ListFeedbacksComponent implements OnInit {
  feedbacks!: Feedback[];

  constructor(private feedbackService: FeedbackService,  private router: Router){}

  ngOnInit(): void{
    this.getFeedbacks();
  }

  getFeedbacks(): void{
    this.feedbackService.getFeedbacks()
      .subscribe(feedbacks => this.feedbacks = feedbacks);
  }
}
