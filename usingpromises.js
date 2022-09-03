console.log('person1 : shows tickets');
console.log('person2 : shows tickets');

const promiseWifeBringingTickets = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('tickets');
        },3000)
});

const getPopcorn = promiseWifeBringingTickets.then((t) => {
    console.log('wife : I got the tickets');
    console.log('husband : we should go in');
    console.log('wife : no, i am hungry')
   return new Promise((resolve,reject) => resolve(`${t} popcorn`))
});

const getButter = getPopcorn.then((t) => {
    console.log('husband : I got some popcorn');
    console.log('husband : we should go in');
    console.log('wife : I need some butter on my popcorn');
   return new Promise((resolve,reject) => resolve(`${t} butter`))
});

const getColdDrinks = getButter.then((t) => {
    console.log('husband : I got butter on the popcorn');
    console.log('husband : anything else darling');
    console.log('wife : I also want colddrinks');
    return new Promise((resolve,reject) => resolve(`${t} colddrinks`));
});

getColdDrinks.then((t) => console.log)

console.log('person4 : shows tickets');
console.log('person5 : shows tickets');