import { Component } from '@angular/core';
import { Teacher } from '../../services/models/teacher.model';
import { TeacherService } from '../../services/teacher.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-teachers',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list-teachers.component.html',
  styleUrl: './list-teachers.component.css'
})
export class ListTeachersComponent{
  teachers!: Teacher[];

  constructor(private teacherService: TeacherService,  private router: Router){}

  ngOnInit(): void{
    this.getTeachers();
  }

  getTeachers(): void{
    this.teacherService.getTeachers()
      .subscribe(teachers => this.teachers = teachers);
  }
}
