console.log('person1 : shows tickets');
console.log('person2 : shows tickets');

const preMovie = async () => {
    const promiseWifeBringingTickets = new Promise((resolve,reject) => {
        setTimeout(() => resolve('tickets'),3000)
    });

    const getPopcorn = new Promise((resolve,reject) => resolve(`popcorn`));

    const addButter = new Promise((resolve,reject) => resolve(`butter`));

    const getColdDrinks = new Promise((resolve,reject) => resolve(`colddrinks`));

   let ticket = await promiseWifeBringingTickets;

   console.log(`wife : I got the ${ticket}`);
    console.log('husband : we should go in');
    console.log('wife : no, i am hungry');

    let popcorn = await getPopcorn;

    console.log(`husband : I got some ${popcorn}`);
    console.log('husband : we should go in');
    console.log('wife : I need some butter on my popcorn');

    let butter = await addButter;

    console.log(`husband : I got ${butter} on the popcorn`);
    console.log('husband : anything else darling');
    console.log('wife : I also want colddrinks');

    let colddrinks = await getColdDrinks;

    console.log(`husband : I got ${colddrinks}, anything else?`);
    console.log('wife : lets go in we are getting late');
    console.log('husband : thanks for the remainder');

   return ticket;
}

preMovie().then((m) => console.log(`person3 : shows ${m}`));

console.log('person4 : shows tickets');
console.log('person5 : shows tickets');