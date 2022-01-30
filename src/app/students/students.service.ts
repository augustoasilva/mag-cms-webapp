import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Student} from "../models/Student";

@Injectable({
  providedIn: 'root'
})

export class StudentsService {

  baseUrl = `${environment.apiUrl}/student`;

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}`)
  }

  getById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/${id}`)
  }

  postStudent(student: Student) {
    return this.http.post(`${this.baseUrl}`, student)
  }

  putStudent(id: number, student: Student) {
    return this.http.put(`${this.baseUrl}/${id}`, student)
  }

  deleteStudent(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}
