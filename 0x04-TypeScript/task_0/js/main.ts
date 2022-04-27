interface Student {
  firstName: string,
  lastName?: string,
  age?: number,
  location: string,
}

var student1:Student = {
  firstName: 'John',
  location: 'Tulsa',
}

var student2:Student = {
  firstName: 'Sara',
  location: 'Broken Arrow',
}

let studentList = [student1, student2];

console.log(studentList);


//render a table
