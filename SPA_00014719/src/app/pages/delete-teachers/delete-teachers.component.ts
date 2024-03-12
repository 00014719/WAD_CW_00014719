import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from '../../services/models/teacher.model';

@Component({
  selector: 'app-delete-teachers',
  standalone: true,
  imports: [],
  templateUrl: './delete-teachers.component.html',
  styleUrl: './delete-teachers.component.css'
})
export class DeleteTeachersComponent implements OnInit {
  teacher: Teacher = {
    id: 0,
    firstName: '',
    lastName: ''
  }

  teacherId: number = 0;

  constructor(private route: ActivatedRoute,
    private teacherService : TeacherService, 
    private router : Router) {}

    ngOnInit(): void {
      const teacherId = this.route.snapshot.paramMap.get('id');
      this.teacherId = teacherId ? + teacherId : 0;    
      this.getTeacher(this.teacherId);
    }

    getTeacher(id: number): void {
      this.teacherService.getTeacher(id)
        .subscribe(teacher => {
          this.teacher = teacher
        });
    }
  deleteTeacher(): void{
    this.teacherService.deleteTeacher(this.teacherId)
      .subscribe(
        response => {
            this.router.navigate(['/teachers']);
        },
        error => console.log(error)
      );
  }

  cancelDelete(): void{
    this.router.navigate(['/teachers']);
  }
}
