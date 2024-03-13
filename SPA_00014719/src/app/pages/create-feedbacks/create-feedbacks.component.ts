import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../services/feedback.service';
import { Feedback } from '../../services/models/feedback.model';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Teacher } from '../../services/models/teacher.model';
import { TeacherService } from '../../services/teacher.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-feedbacks',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-feedbacks.component.html',
  styleUrl: './create-feedbacks.component.css'
})
export class CreateFeedbacksComponent implements OnInit {
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

  teachers!: Teacher[];

  constructor(
    private feedbackService: FeedbackService, 
    private teacherService: TeacherService,
    private route: ActivatedRoute,
    private router: Router){}

  createFeedback(){
    this.feedbackService.addFeedback(this.feedback)
      .subscribe(
        response => {
          this.router.navigate(['/feedbacks']);
        }
      );
  }

  ngOnInit(): void {
    this.teacherService.getTeachers().subscribe(teachers => {
      this.teachers = teachers;
      }
    );
  }
}
