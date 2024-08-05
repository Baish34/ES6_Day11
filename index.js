const calculateAverage = (numbersArr) => {
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < numbersArr.length; i++) {
    sum = sum + numbersArr[i];
    avg = sum / 3;
  }
  return avg;
};

console.log(calculateAverage([5, 10, 15]));

const reverseString = (str) => {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr = reversedStr + str[i];
  }
  return reversedStr;
};
console.log(reverseString("world"));

const findLongestWord = (words) => {
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
};

console.log(findLongestWord(["apple", "banana", "grapefruit"]));

const calculateStringLength = (str) => {
  let length = 0;
  for (let i = 0; i < str.length; i++) {
    length++;
  }
  return length;
};

console.log(calculateStringLength("hello"));

const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 92 },
  { name: "Charlie", age: 19, grade: 88 },
];

const calculateAverageGrade = (students) => {
  let totalGrades = 0;
  for (let i = 0; i < students.length; i++) {
    totalGrades += students[i].grade;
  }
  return totalGrades / students.length;
};

console.log("Average Grade:", calculateAverageGrade(students));

const getNames = (students) => {
  const names = [];
  for (let i = 0; i < students.length; i++) {
    names.push(students[i].name);
  }
  return names;
};

console.log(getNames(students));

const calculateAverageAge = (students) => {
  let totalAge = 0;
  for (let i = 0; i < students.length; i++) {
    totalAge += students[i].age;
  }
  return totalAge / students.length;
};

console.log(calculateAverageAge(students));

const highGrades = (students) => {
  const highGradeStudents = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].grade >= 90) {
      highGradeStudents.push(students[i]);
    }
  }
  return highGradeStudents;
};

console.log(highGrades(students));

const isAnyBelow18 = (students) => {
  for (let i = 0; i < students.length; i++) {
    if (students[i].age < 18) {
      return true;
    } else {
      return false;
    }
  }
};

console.log(isAnyBelow18(students));

const findStudentByName = (students, name) => {
  for (let i = 0; i < students.length; i++) {
    if (students[i].name === name) {
      return students[i];
    }
  }
};

console.log(findStudentByName(students, "Charlie"));

const getHighScoreStudents = (students) => {
  const highScoreStudents = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].grade > 85) {
      highScoreStudents.push(students[i].name);
    }
  }
  return highScoreStudents;
};

console.log(getHighScoreStudents(students));
