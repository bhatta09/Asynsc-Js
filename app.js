// console.log("one");
// console.log("two");
// console.log("thress");
// setTimeout(()=>{
//     console.log("hello")

// },2000)
// console.log("four");

// function sum(a,b){
//     console.log(a+b);
// }

// function calculate(a,b,sumcallback){
//     sumcallback(a,b)
// }

// calculate(2,2,sum)

// Nested
// function getData(dataId, getNextData){
//     setTimeout(()=>{
//         console.log("data=",dataId);
//         if (getNextData) {
//             getNextData()
//         }
        
//     },2000)
// }

// getData(1, ()=>{
//     getData(2,()=>{
//         getData(3)
//     })
// })


function getData(dataId, getNextData){
    setTimeout(()=>{
        console.log("data", dataId);
        if (getNextData) {
            getNextData()    
        }
        
    },2000)
}

getData(1, ()=>{
    getData(2)

})
