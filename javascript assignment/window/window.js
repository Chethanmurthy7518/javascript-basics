const isEligibile= window.confirm('Is your age greater than 18')
console.log(`isEligibile -${isEligibile}`);
if(isEligibile){
    console.log('eligibile for voting');
}
else{
    console.log('not eligibile for voting');
}

console.log('=====================');

const age = window.prompt('Please enter your age',25)
console.log(`Age -  ${age}`);
if(age >18){
    // console.log('eligibile for voting');
    window.open('http://www.flipkart.com')
}
else{
    // console.log('not eligibile for voting');
    window.open('http://www.firstcry.com')
}

console.log('location ', location);
console.log('History ', history);
console.log('navigator',navigator);

navigator.geolocation.getCurrentPosition(loc=>{
    console.log(loc);
})