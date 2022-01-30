import {Component, Input, OnInit} from '@angular/core';
import {Teacher} from "../models/Teacher";
import {TeachersService} from "../teachers/teachers.service";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  @Input()
  teacherId!: number;

  teacher?: Teacher

  constructor(private teacherService: TeachersService) {
  }

  ngOnInit(): void {
    this.loadTeacher()
  }

  loadTeacher() {
    this.teacher = undefined
    this.teacherService.getById(this.teacherId).subscribe(
      (teachersResponse) => {
        this.teacher = teachersResponse
      },
      (err: any) => {
        console.error(err)
      }
    )
  }
}
