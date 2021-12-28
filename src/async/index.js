const doSomethingAsync = ()=>{
    return new Promise((resolve,reject)=>{
        (true)
            ? setTimeout(()=> resolve('Do Something Async'), 3000)
            : reject(new Error('Test Error'));
    })
};

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
};

console.log('Before');
doSomething();
console.log('After');
doSomething();

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    }catch(err){
        console.error(err);
    }
}

console.log('Before 2');
anotherFunction();
console.log('After 2');
anotherFunction();
