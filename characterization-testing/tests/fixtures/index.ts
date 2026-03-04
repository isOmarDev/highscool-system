import { AssignmentBuilder } from './assignment-builder';
import { ClassRoomBuilder } from './class-room-builder';
import { StudentAssignmentBuilder } from './student-assignment-builder';
import { StudentBuilder } from './student-builder';
import { StudentEnrollmentBuilder } from './student-enrollment-builder';

export * from './reset';

export function aStudent() {
  return new StudentBuilder();
}

export function aClassRoom() {
  return new ClassRoomBuilder();
}

export function anAssignment() {
  return new AssignmentBuilder();
}

export function anEnrolledStudent() {
  return new StudentEnrollmentBuilder();
}

export function aStudentAssignment() {
  return new StudentAssignmentBuilder();
}
