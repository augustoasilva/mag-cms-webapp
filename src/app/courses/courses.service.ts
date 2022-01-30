import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Course} from "../models/Course";

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  baseUrl = `${environment.apiUrl}/course`;

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}`)
  }

  getById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.baseUrl}/${id}`)
  }

  postCourse(course: Course) {
    return this.http.post(`${this.baseUrl}`, course)
  }

  putCourse(id: number, course: Course) {
    return this.http.put(`${this.baseUrl}/${id}`, course)
  }

  deleteCourse(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}
