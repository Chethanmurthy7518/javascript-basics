async function start(){

    console.log("Wake Up at 6:00AM");

    let promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("FreshUP");
            
        },2000 )
    });
    let result1 = await promise;
    console.log(result1)

    let promise1 = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("COOK");
            
        },10000 )
    });
    let result2 = await promise1;
    console.log(result2)

    let promise2 = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("BreakFast");
            
        },5000 )
    });
    let result3 = await promise2;
    console.log(result3)

    let promise3 = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("TravelToOffice");
            
        },2000 )
    });
    let result4 = await promise3;
    console.log(result4)

    console.log("OFFICE")


   

}

start()