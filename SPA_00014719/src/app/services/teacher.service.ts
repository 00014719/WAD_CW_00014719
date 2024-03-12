import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from './models/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private apiUrl = 'https://localhost:7070/api/teacher/'
  constructor(private http: HttpClient) { }

  getTeachers(): Observable<Teacher[]>{
    return this.http.get<Teacher[]>(this.apiUrl);
  }

  getTeacher(id: number): Observable<Teacher>{
    return this.http.get<Teacher>(`${this.apiUrl}${id}`);
  }

  addTeacher(type: Teacher): Observable<any>{
    return this.http.post<Teacher>(this.apiUrl, type);
  }

  deleteTeacher(id: number): Observable<any>{
    const url = `${this.apiUrl}${id}`;
    return this.http.delete<Teacher>(url);
  }

  updateTeacher(id: number, type: Teacher){
    return this.http.put<Teacher>(`${this.apiUrl}${id}`, type);
  } 
}
