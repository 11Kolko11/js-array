const students = [
  { name: "John", age: 20, score: 85 },
  { name: "Jane", age: 22, score: 92 },
  { name: "Jim", age: 19, score: 75 },
  { name: "Jill", age: 21, score: 65 },
  { name: "Jack", age: 23, score: 95 },
];

// 1. getTopScoringStudents
// Приймає масив студентів та повертає масив імен студентів, які мають оцінку більше 80
function getTopScoringStudents(students) {
  const result = [];

  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    if (student.score > 80) {
      result.push(student.name);
    }
  }

  return result;
}

// 2. getAverageAge
// Приймає масив студентів та повертає середній вік студентів
function getAverageAge(students) {
  if (students.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < students.length; i++) {
    sum += students[i].age;
  }

  return sum / students.length;
}

// 3. addStudent
// Приймає масив студентів та новий об'єкт студента і додає його до масиву (повертає НОВИЙ масив)
function addStudent(students, student) {
  const result = [];

  for (let i = 0; i < students.length; i++) {
    result.push(students[i]);
  }

  result.push(student);

  return result;
}

// 4. removeStudentByName
// Приймає масив студентів та ім'я студента, якого потрібно видалити,
// і повертає новий масив без цього студента
function removeStudentByName(students, name) {
  const result = [];

  for (let i = 0; i < students.length; i++) {
    const student = students[i];

    if (student.name !== name) {
      result.push(student);
    }
  }

  return result;
}

module.exports = { getTopScoringStudents, getAverageAge, addStudent, removeStudentByName };
