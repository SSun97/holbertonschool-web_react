interface Teacher {
  readonly firstName: string, // can only be set during initialization of an object of this interface
  readonly lastName: string, // can only be set during initialization of an object of this interface
  fullTimeEmployee: boolean, 
  yearsOfExperience?: number, // optional
  location: string
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports:number
}

function printTeacher (firstName: string, lastName: string) {
  console.log(`${firstName.substring(0, 1)}.${lastName}`);
}


interface StudentClassConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  firstName: string;
  lastName: string;
}

class studentClass {
  constructor(public firstName: string, public lastName: string) {
  }

  workOnHomework() {
    return 'Currently Working';
  }

  displayName() {
    return this.firstName;
  }
}

let student1 = new studentClass('a', 'b');