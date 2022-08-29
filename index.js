
class Student{
    
    constructor(name , age , ph_number, boardmarks){
        this.name = name;
        this.age = age;
        this.phoneNumber = ph_number;
        this.marks = boardmarks;
        
    }

    eligibleforPlacements(minMarks){
        return (minAge) => {
            if(this.marks >= minMarks && this.age > minAge){
                console.log(this.name + " is eligible for placements");
            }
            else{
                console.log(this.name + " is not eligible for placements");
            }
        }
    }
}

let suman = new Student('suman',20,22896,50);
let shreya = new Student('shreya',18,22456,76);
let suraj = new Student('suraj',17,22723,30);
let saurav = new Student('saurav',21,22045,66);
let sahar = new Student('sahar',19,22876,89);

suman.eligibleforPlacements(40)(18);
shreya.eligibleforPlacements(40)(18);
suraj.eligibleforPlacements(40)(18);
saurav.eligibleforPlacements(40)(18);
sahar.eligibleforPlacements(40)(18);


