import {Component, OnInit, TemplateRef} from '@angular/core';
import {Teacher} from "../models/Teacher";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {TeachersService} from "./teachers.service";

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teacherForm: FormGroup
  title = 'Teachers'
  selectedTeacher?: Teacher
  selectedTeacherId!: number
  modalRef?: BsModalRef

  public teachers: Teacher[] | undefined

  constructor(private fb: FormBuilder, private modalService: BsModalService, private teacherService: TeachersService) {
    this.teacherForm = this.fb.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDay: ['', Validators.required],
      salary: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.loadTeachers()
  }

  updateTeacher(teacher: Teacher) {
    if (teacher.id != null) {
      this.teacherService.putTeacher(teacher.id, teacher).subscribe(
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

  saveTeacher(teacher: Teacher) {
    this.teacherService.postTeacher(teacher).subscribe(
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
    if (this.teacherForm?.value.id) {
      this.updateTeacher(this.teacherForm?.value)
    } else {
      this.saveTeacher(this.teacherForm?.value)
    }
    console.log(this.teacherForm?.value)
  }

  loadTeachers() {
    this.teacherService.getAll().subscribe(
      (teachersResponse) => {
        this.teachers = teachersResponse
      },
      (err: any) => {
        console.error(err)
      }
    )
  }

  selectTeacher(teacher: Teacher | null) {
    this.selectedTeacher = undefined
    this.teacherForm.reset()
    if (teacher != null) {
      this.selectedTeacher = teacher
      this.teacherForm.patchValue(teacher)
    }
    this.selectedTeacher = new Teacher()
  }

  deselectTeacher() {
    this.teacherForm.reset()
    this.selectedTeacher = undefined
  }

  openModal(template: TemplateRef<any>, teacher: Teacher) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
    console.log(`teachers-component: selectedTeacherId ${this.selectedTeacherId}`)
    console.log(`teachers-component: teacher.id ${teacher.id}`)
    if (teacher.id != null) {
      this.selectedTeacherId = teacher.id;
    }
    console.log(`teachers-component: selectedTeacherId ${this.selectedTeacherId}`)
  }

}
