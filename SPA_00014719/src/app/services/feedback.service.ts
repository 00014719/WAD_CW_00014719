import { Injectable } from '@angular/core';
import { Feedback } from './models/feedback.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private apiUrl = 'https://localhost:7070/api/feedback/'
  constructor(private http: HttpClient) { }

  getTeachers(): Observable<Feedback[]>{
    return this.http.get<Feedback[]>(this.apiUrl);
  }

  getTeacher(id: number): Observable<Feedback>{
    return this.http.get<Feedback>(`${this.apiUrl}${id}`);
  }

  addTeacher(type: Feedback): Observable<any>{
    return this.http.post<Feedback>(this.apiUrl, type);
  }

  deleteTeacher(id: number): Observable<any>{
    const url = `${this.apiUrl}${id}`;
    return this.http.delete<Feedback>(url);
  }

  updateTeacher(id: number, type: Feedback){
    return this.http.put<Feedback>(`${this.apiUrl}${id}`, type);
  } 
}
