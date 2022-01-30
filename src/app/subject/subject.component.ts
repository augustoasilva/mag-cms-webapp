import {Component, Input, OnInit} from '@angular/core';
import {Subject} from "../models/Subject";
import {SubjectsService} from "../subjects/subjects.service";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  @Input()
  subjectId!: number;

  subject?: Subject

  constructor(private subjectService: SubjectsService) {
  }

  ngOnInit(): void {
    this.loadSubject()
  }

  loadSubject() {
    this.subject = undefined
    this.subjectService.getById(this.subjectId).subscribe(
      (subjectsResponse) => {
        this.subject = subjectsResponse
      },
      (err: any) => {
        console.error(err)
      }
    )
  }
}
