import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Courses } from './types';
import { Student } from './types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    private http: HttpClient,
  ) { }

  getCourses(): Observable<Courses[]> {
    return this.http.get<Courses[]>('/api/listings');
  }

  getStudent(): Observable<Student[]> {
    return this.http.get<Student[]>('/api/student');
  }

  getStudentById(student_name: string): Observable<Courses> {
    return this.http.get<Courses>('/api/listings/${id}');
  }

  addStudent(student_major: string, student_name: string, student_catalog_year: string, student_classes: string[]): Observable<Courses>{
      return this.http.post<Courses>(
        '/api/listings',
        {student_major, student_name, student_catalog_year, student_classes},
        httpOptions,
      );
  }
}
