import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../models/Student";
import {StudentsService} from "../students/students.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input()
  studentId!: number;

  student?: Student

  constructor(private studentService: StudentsService) {
  }

  ngOnInit(): void {
    this.loadStudent()
  }

  loadStudent() {
    this.student = undefined
    this.studentService.getById(this.studentId).subscribe(
      (studentsResponse) => {
        this.student = studentsResponse
        this.getSubjectGrade()
      },
      (err: any) => {
        console.error(err)
      }
    )
  }

  getSubjectGrade() {
    if (this.student != null && this.student.grades != null && this.student.subjects != null) {
      for (const grade of this.student.grades) {
        this.student.subjects.map((subject) => {
          if (subject.grades == null) {
            subject.grades = []
          }
          if (subject.subject != null && subject.subject.id === grade.subject?.id
            && grade.value != null) {
            subject.grades?.push(grade.value)
          }
          return subject
        })
      }
    }
  }
}
