interface DirectorInterface {
  workFromHome() : string,
  getCoffeeBreak(): string,
  workDirectorTasks(): string
}

interface TeacherInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workTeacherTasks(): string
}

class Director implements DirectorInterface {
  workFromHome(): string { return 'Working from home';}
  getCoffeeBreak(): string {return 'Getting a coffee break';}
  workDirectorTasks(): string {return 'Getting to director tasks';}
}

class Teacher implements TeacherInterface {
  workFromHome(): string {return 'Cannot work from home';}
  getCoffeeBreak(): string {return 'Cannot have a break';}
  workTeacherTasks(): string {return 'Getting to work';}
}

function createEmployee(salary: number | string): Teacher | Director {
  if (salary < 500) return new Teacher;
  return new Director;
}

function isDirector(employee: Teacher | Director) {
  if (employee instanceof Director) 
    return true;
  if (employee instanceof Director) 
  return false;
}

function executeWork (employee: Teacher | Director) {
  if (employee instanceof Director) 
    console.log(employee.workDirectorTasks());
  if (employee instanceof Teacher)
    console.log(employee.workTeacherTasks());
}

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects) {
  if (todayClass === "Math") {
    console.log("Teaching Math");
  }
  if(todayClass === "History") {
    console.log("Teaching History");
  }
}

teachClass('Math');
teachClass('History');