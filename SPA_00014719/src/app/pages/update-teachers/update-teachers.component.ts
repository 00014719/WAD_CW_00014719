import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../services/models/teacher.model';
import { TeacherService } from '../../services/teacher.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-teachers',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-teachers.component.html',
  styleUrl: './update-teachers.component.css'
})
export class UpdateTeachersComponent implements OnInit {
  teacher: Teacher = {
    id: 0,
    firstName: '',
    lastName: ''
  }

  teacherId = 0;

  constructor(private teacherService: TeacherService, 
    private router: Router, 
    private route: ActivatedRoute,){}

  ngOnInit(): void {
    const teacherId = this.route.snapshot.paramMap.get('id');
    this.teacherId = teacherId ? + teacherId : 0;    
  }

  editTeacher(teacher: Teacher){
    this.teacherService.updateTeacher(this.teacherId, teacher)
      .subscribe(
        response => {
          this.router.navigate(['/teachers']);
        }
      );
  }
}
