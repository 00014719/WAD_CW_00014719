import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from './models/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private apiUrl = 'https://localhost:7070/api/Teacher'
  constructor(private http: HttpClient) { }

  getTeachers(): Observable<Teacher[]>{
    console.log('get teachers');
    return this.http.get<Teacher[]>(this.apiUrl);
  }

  getTeacher(id: number): Observable<Teacher>{
    console.log('get teacher');
    return this.http.get<Teacher>(`${this.apiUrl}${id}`);
  }

  addTeacher(type: Teacher): Observable<any>{
    console.log('add teacher');
    return this.http.post<Teacher>(this.apiUrl, type);
  }

  deleteTeacher(id: number): Observable<any>{
    console.log('delete teacher');
    const url = `${this.apiUrl}${id}`;
    return this.http.delete<Teacher>(url);
  }

  updateTeacher(id: number, type: Teacher){
    console.log('update teacher');
    return this.http.put<Teacher>(`${this.apiUrl}${id}`, type);
  } 
}
