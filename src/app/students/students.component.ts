import {Component, OnInit, TemplateRef} from '@angular/core';
import {Student} from "../models/Student";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {StudentsService} from "./students.service";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  studentForm: FormGroup
  title = 'Students'
  selectedStudent?: Student
  selectedStudentId!: number
  modalRef?: BsModalRef

  public students: Student[] | undefined

  constructor(private fb: FormBuilder, private modalService: BsModalService, private studentService: StudentsService) {
    this.studentForm = this.fb.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDay: ['', Validators.required],
      registrationNumber: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.loadStudents()
  }

  updateStudent(student: Student) {
    if (student.id != null) {
      this.studentService.putStudent(student.id, student).subscribe(
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

  saveStudent(student: Student) {
    this.studentService.postStudent(student).subscribe(
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
    if (this.studentForm?.value.id) {
      this.updateStudent(this.studentForm?.value)
    } else {
      this.saveStudent(this.studentForm?.value)
    }
    console.log(this.studentForm?.value)
  }

  loadStudents() {
    this.studentService.getAll().subscribe(
      (studentsResponse) => {
        this.students = studentsResponse
      },
      (err: any) => {
        console.error(err)
      }
    )
  }

  selectStudent(student: Student | null) {
    this.selectedStudent = undefined
    this.studentForm.reset()
    if (student != null) {
      this.selectedStudent = student
      this.studentForm.patchValue(student)
    }
    this.selectedStudent = new Student()
  }

  deselectStudent() {
    this.selectedStudent = undefined
    this.studentForm.reset()
  }

  openModal(template: TemplateRef<any>, student: Student) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
    console.log(`students-component: selectedStudentId ${this.selectedStudentId}`)
    console.log(`students-component: student.id ${student.id}`)
    if (student.id != null) {
      this.selectedStudentId = student.id;
    }
    console.log(`students-component: selectedStudentId ${this.selectedStudentId}`)
  }

}
