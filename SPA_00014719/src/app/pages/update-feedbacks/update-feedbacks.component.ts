import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../services/models/teacher.model';
import { Feedback } from '../../services/models/feedback.model';
import { FeedbackService } from '../../services/feedback.service';
import { TeacherService } from '../../services/teacher.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-feedbacks',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-feedbacks.component.html',
  styleUrl: './update-feedbacks.component.css'
})
export class UpdateFeedbacksComponent implements OnInit {
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

  teacher: Teacher = {
    id: 0,
    firstName: '',
    lastName: ''
  };

  feedbackId = 0;

  constructor(private route: ActivatedRoute, 
    private feedbackService: FeedbackService, 
    private teacherService: TeacherService, 
    private router: Router) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.feedbackId = idParam ? + idParam : 0;    
    this.getFeedback(this.feedbackId);

    this.teacherService.getTeachers().subscribe(teachers => {
      this.teachers = teachers;
      }
    );

    this.teacherService.getTeacher(this.feedback.teacher.id).subscribe(teacher => {
      this.teacher = teacher;
    })
  }

  getFeedback(id: number): void{
      this.feedbackService.getFeedback(id)
      .subscribe(feedback => {
        this.feedback = feedback;
      });
  }

  editFeedback(feedback: Feedback){
    this.feedbackService.updateFeedback(this.feedbackId, this.feedback).subscribe(
      response => {
        this.router.navigate(['/feedbacks']);
      },
      error => console.log(error)
    )
  }
}