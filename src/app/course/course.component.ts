import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../models/Course";
import {CoursesService} from "../courses/courses.service";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input()
  courseId!: number;

  course?: Course

  constructor(private courseService: CoursesService) {
  }

  ngOnInit(): void {
    this.loadCourse()
  }

  loadCourse() {
    this.course = undefined
    this.courseService.getById(this.courseId).subscribe(
      (coursesResponse) => {
        this.course = coursesResponse
        this.course.enrollments = 0
        if (this.course.subjects != null) {
          this.course.subjects.forEach((subject) => {
            if (subject.students != null) {
              // @ts-ignore
              this.course?.enrollments += subject.students?.length
            }
          })
        }
      },
      (err: any) => {
        console.error(err)
      }
    )
  }
}
