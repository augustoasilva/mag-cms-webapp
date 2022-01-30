import {Subject} from "./Subject";
import {Teacher} from "./Teacher";

export class SubjectForStudent {
  id: number | undefined
  subject: Subject | undefined
  teacher: Teacher | undefined
  grades: number[] | undefined
}
