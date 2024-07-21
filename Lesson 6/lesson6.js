//exercise 1
String.prototype.filter = function(bannedWords) {
    return this.split(' ').filter(word => !bannedWords.includes(word)).join(' ');
};

// Testing the filter function
console.log("This house is not nice!".filter(['not'])); // Output: "This house is nice!"

//exercise 2
Array.prototype.bubbleSort = function() {
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length - 1; j++) {
            if (this[j] > this[j + 1]) {
                [this[j], this[j + 1]] = [this[j + 1], this[j]];
            }
        }
    }
    return this;
};

// Testing the bubble sort function
console.log([6, 4, 0, 3, -2, 1].bubbleSort()); // Output: [-2, 0, 1, 3, 4, 6]

//exercise 3
//using function constructor
function Person(name) {
    this.name = name;
}

Person.prototype.teach = function(subject) {
    console.log(`${this.name} is now teaching ${subject}`);
};

// Creating a Teacher object
const teacher1 = new Person('John');
teacher1.teach('Math'); // Output: John is now teaching Math

//using Object.create
const personPrototype = {
    teach: function(subject) {
        console.log(`${this.name} is now teaching ${subject}`);
    }
};

function createTeacher(name) {
    let teacher = Object.create(personPrototype);
    teacher.name = name;
    return teacher;
}

// Creating a Teacher object using Object.create
const teacher2 = createTeacher('Jane');
teacher2.teach('Science'); // Output: Jane is now teaching Science

//Exercise 4
//using object prototype approach
// Person prototype
const personProto = {
    greet: function() {
        console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
    },
    salute: function() {
        console.log("Good morning!, and in case I don't see you, good afternoon, good evening, and good night!");
    }
};

// Student prototype inheriting from Person
const studentProto = Object.create(personProto);
studentProto.greet = function() {
    console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
};

// Professor prototype inheriting from Person
const professorProto = Object.create(personProto);
professorProto.greet = function() {
    console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
};

// Creating Student and Professor objects
let student = Object.create(studentProto);
student.name = 'Alice';
student.age = 20;
student.major = 'Computer Science';

const professor = Object.create(professorProto);
professor.name = 'Dr. Smith';
professor.age = 45;
professor.department = 'Physics';

// Calling methods
student.greet(); // Output: Hey, my name is Alice and I am studying Computer Science.
student.salute(); // Output: Good morning!, and in case I don't see you, good afternoon, good evening, and good night!
professor.greet(); // Output: Good day, my name is Dr. Smith and I am in the Physics department.
professor.salute(); // Output: Good morning!, and in case I don't see you, good afternoon, good evening, and good night!


//function constructor approach
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
};

Person.prototype.salute = function() {
    console.log("Good morning!, and in case I don't see you, good afternoon, good evening, and good night!");
};

function Student(name, age, major) {
    Person.call(this, name, age);
    this.major = major;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.greet = function() {
    console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
};

function Professor(name, age, department) {
    Person.call(this, name, age);
    this.department = department;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.greet = function() {
    console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
};

// Creating Student and Professor objects
let student = new Student('Bob', 21, 'Mathematics');
const professor = new Professor('Dr. Jones', 50, 'Chemistry');

// Calling methods
student.greet(); // Output: Hey, my name is Bob and I am studying Mathematics.
student.salute(); // Output: Good morning!, and in case I don't see you, good afternoon, good evening, and good night!
professor.greet(); // Output: Good day, my name is Dr. Jones and I am in the Chemistry department.
professor.salute(); // Output: Good morning!, and in case I don't see you, good afternoon, good evening, and good night!

