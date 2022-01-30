import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Teacher} from "../models/Teacher";

@Injectable({
  providedIn: 'root'
})

export class TeachersService {

  baseUrl = `${environment.apiUrl}/teacher`;

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.baseUrl}`)
  }

  getById(id: number): Observable<Teacher> {
    return this.http.get<Teacher>(`${this.baseUrl}/${id}`)
  }

  postTeacher(teacher: Teacher) {
    return this.http.post(`${this.baseUrl}`, teacher)
  }

  putTeacher(id: number, teacher: Teacher) {
    return this.http.put(`${this.baseUrl}/${id}`, teacher)
  }

  deleteTeacher(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}
