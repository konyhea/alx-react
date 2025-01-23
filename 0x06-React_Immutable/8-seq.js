import { Map, Seq } from 'immutable';

/**
 * Filters the best students based on score and prints their names with first letters capitalized.
 * @param {Object} grades - An object where the keys are student IDs and the values are student objects.
 */
export function printBestStudents(grades) {
  // Use `Seq` to create a sequence from the grades object and filter students with a score >= 70
  Seq(grades)
    .filter(student => student.score >= 70) // Filter students with score >= 70
    .map(student => ({
      ...student,
      firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1), // Capitalize first name
      lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),   // Capitalize last name
    }))
    .forEach(student => {
      console.log(`${student.firstName} ${student.lastName}`); // Print the student names
    });
}

