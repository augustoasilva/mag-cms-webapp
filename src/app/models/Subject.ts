import {Teacher} from "./Teacher";
import {Course} from "./Course";
import {StudentForSubject} from "./StudentForSubject";

export class Subject {
  id: number | undefined
  name: string | undefined
  teacher: Teacher | undefined
  course: Course | undefined
  students: StudentForSubject[] | undefined
}
