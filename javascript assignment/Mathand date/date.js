const todayDate = new Date()
console.log(`Todays Date ${todayDate}`);
console.log('.............');

const futureDate = new Date(2022,1,2,12,30,45)
console.log(`Future Date ${futureDate}`);
console.log('.................');
const dateofBirth = new Date('May 09 1996')
console.log(`Date of Birth- ${dateofBirth}`);
console.log(`Full year- ${todayDate.getFullYear()}`);
console.log(`Month- ${todayDate.getMonth()}`);
console.log(`Date- ${todayDate.getDate()}`);
console.log(`Day- ${todayDate.getDay()}`);
console.log(`Day time- ${Date.now()}`);
console.log('...............');