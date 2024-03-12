import { Component } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';
import { Teacher } from '../../services/models/teacher.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-teachers',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-teachers.component.html',
  styleUrl: './create-teachers.component.css'
})
export class CreateTeachersComponent {
  teacher: Teacher = {
    id: 0,
    firstName: '',
    lastName: ''
  }

  constructor(private teacherService: TeacherService, private router: Router){}

  createTeacher(teacher: Teacher){
    this.teacherService.addTeacher(teacher)
      .subscribe(
        response => {
          this.router.navigate(['/teachers']);
        }
      );
  }
}
