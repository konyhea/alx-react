import { Seq } from 'immutable';

export default function printBestStudents(grades) {
  // Use `Seq` to create a sequence from the grades object and filter students with a score >= 70
  Seq(grades)
    .filter((student) => student.score >= 70) // Filter students with score >= 70
    .map((student) => ({
      ...student,
      firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
      lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
    }))
    .forEach((student) => {
      console.log(`${student.firstName} ${student.lastName}`);
    });
}
