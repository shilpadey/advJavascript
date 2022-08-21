
//var obj = {num : 5};

//function addToThis(a,b,c){
  //  return this.num + a + b + c;
//}

//console.log(addToThis.call(obj,4));
    
  //var arr = [1,5,6];
//console.log(addToThis.apply(obj,arr));  
    
//var bound = addToThis.bind(obj);
//console.log(bound(1,2,4));

//var student = {age : 20};

//function printAge(){
  //  return this.age;
//}

//var bound1 = printAge.bind(student);
//console.log(bound1());

//let multiply = function(x,y){
  //console.log(x*y);
//}

let multiply = function(x){
  return function (y) {
    console.log(x*y);
  }
}

let multiplybyTwo = multiply(2);
multiplybyTwo(5);

let multiplybyThree = multiply(3);
multiplybyThree(10);

