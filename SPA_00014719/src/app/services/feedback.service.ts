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

  getFeedbacks(): Observable<Feedback[]>{
    return this.http.get<Feedback[]>(this.apiUrl);
  }

  getFeedback(id: number): Observable<Feedback>{
    return this.http.get<Feedback>(`${this.apiUrl}${id}`);
  }

  addFeedback(type: Feedback): Observable<any>{
    return this.http.post<Feedback>(this.apiUrl, type);
  }

  deleteFeedback(id: number): Observable<any>{
    const url = `${this.apiUrl}${id}`;
    return this.http.delete<Feedback>(url);
  }

  updateFeedback(id: number, type: Feedback){
    return this.http.put<Feedback>(`${this.apiUrl}${id}`, type);
  } 
}
