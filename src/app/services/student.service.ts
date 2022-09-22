import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private basePath= 'http://localhost:9090/student'

  constructor(private http:HttpClient) { }

  getAllStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(`${this.basePath}/all`)
  }

  deleteOneStudent(studentId: String): Observable<any> {
    return this.http.delete(`${this.basePath}/remove/${studentId}`, {responseType: 'text'});
  }

  createStudent(s: Student): Observable<any> {
    return this.http.post(`${this.basePath}/add`, s, {responseType: 'text'});
  }

  
  getOneStudent(studentId:String): Observable<Student> {
    return this.http.get<Student>(`${this.basePath}/id/${studentId}`);
  }

  updateStudent(studentId: String, s: Student): Observable<any> {
    return this.http.put(`${this.basePath}/modify/${studentId}`, s, {responseType : 'text'});
  }
}
