import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICourses } from '../interfaces/courses.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  createCourse(body:ICourses): Observable<ICourses> {
    return this.http.post<ICourses>('/api/courses', body);
  }
}
