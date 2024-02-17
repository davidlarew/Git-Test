class Student {
    constructor() {
        this.name = name,
        this.email = "Solomon.Grundy@DC.com"
    }
}
const nameTest1 = new Student();
console.log(nameTest1.name + nameTest1.email);

const testStudent = new Student('Solomon Grundy', 'Solomon.Grundy@DC.com');
console.log(testStudent);
if (testStudent.name === 'Solomon Grundy' && testStudent.email === 'Solomon.Grundy@DC.com') {
    console.log('TASK 1: PASS');
}

class Bootcamp {
    constructor() {
        this.name = "React",
        this.level = "Advanced",
        this.students = [];
    }
    registerStudent(student) {
        const studentToRegister = new Student(this.name, this.email);
        console.log(studentToRegister.name + studentToRegister.email);
        return studentToRegister.name + '' + studentToRegister.email;
    }
}

const bootcampTest1 = new Bootcamp();
console.log(bootcampTest1.name + '' + bootcampTest1.level + '' + bootcampTest1.students);

const testBootcamp = new Bootcamp('React', 'Advanced');
console.log(testBootcamp);
if (bootcampTest1.name === 'React' && bootcampTest1.level === 'Advanced') {
    console.log('TASK 2: PASS');
}



////////// React Boot Camp Test

const reactBootcamp = new Bootcamp('React', 'Advanced', 0);
console.log(reactBootcamp + 'reactBootCamp');
if (reactBootcamp.name === 'React' && reactBootcamp.level === 'Advanced'
    && Array.isArray(reactBootcamp.students) && reactBootcamp.students.length === 0) {
    console.log("TASK 3: PASS");
}


const bootcampTest2 = new Bootcamp();
console.log(bootcampTest2.name + '' + bootcampTest2.level + '' + bootcampTest2.students);

const testBootcamp2 = new Bootcamp('React', 'Advanced');
console.log(testBootcamp2.registerStudent(this.name = 'Daffy Duck', this.email = 'dd@dc.com'));
if (bootcampTest2.name === 'React' && bootcampTest2.level === 'Advanced') {
    console.log(testBootcamp2.registerStudent(this.name, this.email));

    let studentList = [];
    studentList = testBootcamp2.registerStudent(this.name, this.email);
    //const result = studentList.includes(({ name }) => this.name === "Solomon Grundy");
    const result = studentList.includes("Solomon");
    const result2 = studentList.includes("Solomon.Grundy@DC.com");
    console.log(result + " result This student is registered, please add a new student.");
    console.log(result2 + " result2 This student email is  registered, please add a new student.");

    const bootcamp = new Bootcamp(this.name, this.email);
    console.log(bootcamp.registerStudent(this.name, this.email));
   

    const runTest = (bootcamp, student) => {
        const attemptOne = bootcamp.registerStudent(student);
        if ( attemptOne ) {
            console.log("attemptOne: PASS");
        }
        console.log("1 " + attemptOne);
        
        const attemptTwo = bootcamp.registerStudent(student);
        if ( !attemptTwo ) {
            console.log("attemptTwo: PASS");
        }
        console.log("2 " + attemptTwo);
        const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
        if ( attemptThree ) {
            console.log("attemptThree: PASS");
        }        
        console.log("3 Don't Add Babs Bunny to StudentList " + attemptThree);

        if (attemptOne && !attemptTwo && !attemptThree) {
            studentList.push(attemptThree);
            console.log("TASK 4: PASS" + studentList);
        }
    };
    runTest(reactBootcamp, testStudent);
}



