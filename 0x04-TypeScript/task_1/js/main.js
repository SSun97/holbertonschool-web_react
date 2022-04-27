function printTeacher(firstName, lastName) {
    console.log(firstName.substring(0, 1) + "." + lastName);
}
var studentClass = /** @class */ (function () {
    function studentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    studentClass.prototype.workOnHomework = function () {
        return 'Currently Working';
    };
    studentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return studentClass;
}());
var student1 = new studentClass('a', 'b');
