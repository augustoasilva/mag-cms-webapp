import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Subject} from "../models/Subject";
import {Grade} from "../models/Grade";

@Injectable({
  providedIn: 'root'
})

export class SubjectsService {

  baseUrl = `${environment.apiUrl}/subject`;

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${this.baseUrl}`)
  }

  getById(id: number): Observable<Subject> {
    return this.http.get<Subject>(`${this.baseUrl}/${id}`)
  }

  getGradesByStudentId(subjectId: number, studentId: number): Observable<Grade[]> {
    return this.http.get<Grade[]>(`${this.baseUrl}/${subjectId}/grades/student/${studentId}`)
  }

  postSubject(subject: Subject) {
    return this.http.post(`${this.baseUrl}`, subject)
  }

  putSubject(id: number, subject: Subject) {
    return this.http.put(`${this.baseUrl}/${id}`, subject)
  }

  deleteSubject(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}
