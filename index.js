
class Student{
    static count = 0;
    constructor(name , age , ph_number, boardmarks){
        this.name = name;
        this.age = age;
        this.phoneNumber = ph_number;
        this.marks = boardmarks;
        Student.count += 1;
    }

    numberOfStudent(){
        console.log("Number of student registered "+ Student.count);
    }

    studentEligibity(){
        if(this.marks >= 40){
            console.log(`${this.name} is eligible`);
          }
          else{
            console.log(`${this.name} is not eligible`);
          }
    }
}

let suman = new Student('suman',20,22896,50);
let shreya = new Student('shreya',20,22456,76);
let suraj = new Student('suraj',17,22723,30);
let saurav = new Student('saurav',21,22045,66);
let sahar = new Student('sahar',19,22876,89);

suman.studentEligibity();
shreya.studentEligibity();
suraj.studentEligibity();
saurav.studentEligibity();
sahar.studentEligibity();

suman.numberOfStudent();