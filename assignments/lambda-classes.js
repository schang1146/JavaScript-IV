// CODE here for your Lambda Classes

class Person {
    constructor(personAttr) {
        this.name = personAttr.name;
        this.age = personAttr.age;
        this.location = personAttr.location;
        this.gender = personAttr.gender;
        this.speak = function() {
            return `Hello my name is ${this.name}, I am from ${this.location}.`;
        };
    };
};

class Instructor extends Person {
    constructor(instructorAttr) {
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
        this.demo = function(subject) {
            return `Today we are learning about ${subject}.`;
        };
        this.grade = function(student, subject) {
            return `${student.name} receives a perfect score on ${subject}.`;
        };
    };
};

class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
        this.listsSubjects = function() {
            return this.favSubjects.join('\r\n');
        };
        this.PRAssignment = function(subject) {
            return `${this.name} has submitted a PR for ${subject}.`;
        };
        this.sprintChallenge = function(subject) {
            return `${this.name} has begun sprint challenge on ${subject}.`;
        };
    };
};

class ProjectManager extends Instructor {
    constructor(projectManagerAttr) {
        super(projectManagerAttr);
        this.gradClassName = projectManagerAttr.gradClassName;
        this.favInstructor = projectManagerAttr.favInstructor;
        this.standUp = function(channel) {
            return `${this.name} announces to ${channel}, @channel standy times!`;
        };
        this.debugsCode = function(student, subject) {
            return `${this.name} debugs ${student.name}'s code on ${subject}.`;
        };
    };
};

// Create Student
const mark = new Student({
    name: 'Mark',
    location: 'Los Angeles',
    age: 25,
    gender: 'male',
    previousBackground: 'none',
    className: 'WebPT5',
    favSubjects: ['Coding', 'Math', 'Science'],
})

// Create Project Manager
const phil = new ProjectManager({
    name: 'Phil',
    location: 'Seattle',
    age: 37,
    gender: 'male',
    specialty: 'ReactJS',
    favLanguage: 'Javascript',
    catchPhrase: 'Do it!',
    gradClassName: 'WebPT5',
    favInstructor: 'Cam Pope',
});

// Testing Student
console.log(mark.name);
console.log(mark.location);
console.log(mark.listsSubjects());
console.log(mark.PRAssignment('Javascript III'));
console.log(mark.sprintChallenge('ReactJS'));

// Testing Project Manager
console.log(phil.speak());
console.log(phil.demo('Javascript II'));
console.log(phil.grade(mark, 'Javascript II'));
console.log(phil.standUp('WebPT5'));
console.log(phil.debugsCode(mark, 'Preprocessing I'));