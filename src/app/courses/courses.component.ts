import {Component, OnInit, TemplateRef} from '@angular/core';
import {Course} from "../models/Course";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {CoursesService} from "./courses.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courseForm: FormGroup
  title = 'Courses'
  selectedCourse?: Course
  selectedCourseId!: number
  modalRef?: BsModalRef

  public courses: Course[] | undefined

  constructor(private fb: FormBuilder, private modalService: BsModalService, private courseService: CoursesService) {
    this.courseForm = this.fb.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDay: ['', Validators.required],
      registrationNumber: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.loadCourses()
  }

  updateCourse(course: Course) {
    if (course.id != null) {
      this.courseService.putCourse(course.id, course).subscribe(
        (res) => {
          if (res != null) {
            console.log(res)
          }
          alert("User updated!")
        },
        (err: any) => {
          console.log(err)
        }
      )
    }
  }

  saveCourse(course: Course) {
    this.courseService.postCourse(course).subscribe(
      (res) => {
        if (res != null) {
          console.log(res)
        }
        alert("User saved!")
      },
      (err: any) => {
        console.log(err)
      }
    )
  }

  submit() {
    if (this.courseForm?.value.id) {
      this.updateCourse(this.courseForm?.value)
    } else {
      this.saveCourse(this.courseForm?.value)
    }
    console.log(this.courseForm?.value)
  }

  loadCourses() {
    this.courseService.getAll().subscribe(
      (coursesResponse) => {
        this.courses = coursesResponse
      },
      (err: any) => {
        console.error(err)
      }
    )
  }

  selectCourse(course: Course | null) {
    this.selectedCourse = undefined
    this.courseForm.reset()
    if (course != null) {
      this.selectedCourse = course
      this.courseForm.patchValue(course)
    }
    this.selectedCourse = new Course()
  }

  deselectCourse() {
    this.selectedCourse = undefined
    this.courseForm.reset()
  }

  openModal(template: TemplateRef<any>, course: Course) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
    console.log(`courses-component: selectedCourseId ${this.selectedCourseId}`)
    console.log(`courses-component: course.id ${course.id}`)
    if (course.id != null) {
      this.selectedCourseId = course.id;
    }
    console.log(`courses-component: selectedCourseId ${this.selectedCourseId}`)
  }

}
