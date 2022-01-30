import {Component, OnInit, TemplateRef} from '@angular/core';
import {Subject} from "../models/Subject";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {SubjectsService} from "./subjects.service";

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjectForm: FormGroup
  title = 'Subjects'
  selectedSubject?: Subject
  selectedSubjectId!: number
  modalRef?: BsModalRef

  public subjects: Subject[] | undefined

  constructor(private fb: FormBuilder, private modalService: BsModalService, private subjectService: SubjectsService) {
    this.subjectForm = this.fb.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDay: ['', Validators.required],
      registrationNumber: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.loadSubjects()
  }

  updateSubject(subject: Subject) {
    if (subject.id != null) {
      this.subjectService.putSubject(subject.id, subject).subscribe(
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

  saveSubject(subject: Subject) {
    this.subjectService.postSubject(subject).subscribe(
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
    if (this.subjectForm?.value.id) {
      this.updateSubject(this.subjectForm?.value)
    } else {
      this.saveSubject(this.subjectForm?.value)
    }
    console.log(this.subjectForm?.value)
  }

  loadSubjects() {
    this.subjectService.getAll().subscribe(
      (subjectsResponse) => {
        this.subjects = subjectsResponse
      },
      (err: any) => {
        console.error(err)
      }
    )
  }

  selectSubject(subject: Subject | null) {
    this.selectedSubject = undefined
    this.subjectForm.reset()
    if (subject != null) {
      this.selectedSubject = subject
      this.subjectForm.patchValue(subject)
    }
    this.selectedSubject = new Subject()
  }

  deselectSubject() {
    this.selectedSubject = undefined
    this.subjectForm.reset()
  }

  openModal(template: TemplateRef<any>, subject: Subject) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
    console.log(`subjects-component: selectedSubjectId ${this.selectedSubjectId}`)
    console.log(`subjects-component: subject.id ${subject.id}`)
    if (subject.id != null) {
      this.selectedSubjectId = subject.id;
    }
    console.log(`subjects-component: selectedSubjectId ${this.selectedSubjectId}`)
  }

}
