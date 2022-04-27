var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () { return 'Working from home'; };
    Director.prototype.getCoffeeBreak = function () { return 'Getting a coffee break'; };
    Director.prototype.workDirectorTasks = function () { return 'Getting to director tasks'; };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () { return 'Cannot work from home'; };
    Teacher.prototype.getCoffeeBreak = function () { return 'Cannot have a break'; };
    Teacher.prototype.workTeacherTasks = function () { return 'Getting to work'; };
    return Teacher;
}());
function createEmployee(salary) {
    if (salary < 500)
        return new Teacher;
    return new Director;
}
function isDirector(employee) {
    if (employee instanceof Director)
        return true;
    if (employee instanceof Director)
        return false;
}
function executeWork(employee) {
    if (employee instanceof Director)
        console.log(employee.workDirectorTasks());
    if (employee instanceof Teacher)
        console.log(employee.workTeacherTasks());
}
function teachClass(todayClass) {
    if (todayClass === "Math") {
        console.log("Teaching Math");
    }
    if (todayClass === "History") {
        console.log("Teaching History");
    }
}
teachClass('Math');
teachClass('History');
