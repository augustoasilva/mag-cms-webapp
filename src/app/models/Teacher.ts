import {Subject} from "./Subject";

export class Teacher {
  id: number | undefined
  firstName: string | undefined
  lastName: string | undefined
  birthDay: Date | undefined
  salary: number | undefined
  subjects: Subject[] | undefined
}
