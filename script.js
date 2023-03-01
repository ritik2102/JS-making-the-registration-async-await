
// console.log('person 1: shows ticket');
// console.log('person 2: shows ticket');

// const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('ticket');
//     },3000)
// });

// // Since it is promised, execution does not wait here, it goes to subsequent statements

// const getPopcorn=promiseWifeBringingTicks.then((t)=>{
//     console.log('wife: i have the tics');
//     console.log('husband: we should go in');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve,reject)=>resolve(`${t} popcorn`));
// });

// const getButter=getPopcorn.then((t)=> {
//     console.log('husband: i got some popcorn');
//     console.log('husband: we should go in');
//     console.log('wife: I need butter on my popcorn');
//     return new Promise((resolve,reject)=>resolve(`${t} butter`));
// });

// getButter.then((t)=>console.log(t))

// console.log('person 4: shows ticket');
// console.log('person 5: shows ticket');


// console.log('person 1: shows ticket');
// console.log('person 2: shows ticket');

// const preMovie= async ()=>{

//     const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
//             setTimeout(()=>{resolve('ticket');},3000);
//     });

//     const getPopcorn= new Promise((resolve,reject)=>resolve(`popcorn`));
//     const addButter= new Promise((resolve,reject)=>resolve('butter'));
//     const getColdDrinks= new Promise((resolve,reject)=>resolve('Cold drinks'));
//     const getCandy= new Promise((resolve,reject)=>resolve('candy'));
//     const getCoke=new Promise((resolve,reject)=>resolve('coke'));
//     // Will wait for the promiseWifeBringingTicks to execute before returning anything, execution will be stopped here in this block until the promiseWifeBringingTicks returns something
//     let ticket=await promiseWifeBringingTicks;

//     console.log(`wife: i have the ${ticket}`);
//     console.log('husband: we should go in');
//     console.log('wife: no i am hungry');

//     let popcorn=await getPopcorn;

//     console.log(`husband: i got some ${popcorn}`);
//     console.log('husband: we should go in');
//     console.log('wife: I need butter on my popcorn');

//     let butter=await addButter;

//     console.log(`husband: i got some ${butter} on popcorn`);
//     console.log(`husband: anything else darling`);
//     console.log(`wife: lets go we are getting late`);
//     console.log(`husband: thank you for the reminder *grins`);

//     let coldDrinks=await getColdDrinks;

//     console.log(`Gets ${coldDrinks}`);
//     return ticket;
// }

// preMovie().then((m)=>console.log(`person 3: shows ${m}`));

// console.log('person 4: shows ticket');
// console.log('person 5: shows ticket');

console.log('person 1: shows ticket');
console.log('person 2: shows ticket');

const preMovie= async ()=>{

    const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
            setTimeout(()=>{resolve('ticket');},3000);
    });

    const getPopcorn= new Promise((resolve,reject)=>resolve(`popcorn`));
    const getCandy= new Promise((resolve,reject)=>resolve('candy'));
    const getCoke=new Promise((resolve,reject)=>resolve('coke'));
    // Will wait for the promiseWifeBringingTicks to execute before returning anything, execution will be stopped here in this block until the promiseWifeBringingTicks returns something
    
    let ticket;
    try{
        ticket=await promiseWifeBringingTicks;
    } 
    // error handling in case wife does not return with any ticket
    catch(e){
        ticket='sad face';
    }

    // Using promise.all to resolve all promises at once
    let [popcorn,candy,coke]=await Promise.all([getPopcorn,getCandy,getCoke])
    
    console.log(`${popcorn}, ${candy}, ${coke}`);

    return ticket;
}

preMovie().then((m)=>console.log(`person 3: shows ${m}`));

console.log('person 4: shows ticket');
console.log('person 5: shows ticket');


