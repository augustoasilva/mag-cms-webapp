import {Grade} from "./Grade";
import {SubjectForStudent} from "./SubjectForStudent";

export class Student {
  id: number | undefined
  firstName: string | undefined
  lastName: string | undefined
  birthDay: Date | undefined
  registrationNumber: number | undefined
  subjects: SubjectForStudent[] | undefined
  grades: Grade[] | undefined
}
