import {Subject} from "./Subject";

export class Course {
  id: number | undefined
  name: string | undefined
  subjects: Subject[] | undefined
  enrollments: number | undefined
}
