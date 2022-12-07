import React from 'react'


function Leftfbs3() {
//const arr = [0,1,2,3,4,5,7,8,9,10,11,12,13,15,16,17,18,19,20,21,22,25,26,27,28,29,30,31,32,33,34,35,36,37,41,42,43,45,46,47,48,50,51,52,53,54,55,56,57,59]
//let arr = [0,1,2,3,4,5,6,7,8,9, 10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49]
//const hundredArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];

let prevStartingIndex = 0
let startingIndex = 0
let targetPosition = 0
let counter = 1
const target = 14

let arr = [0.00000000000000000000000001]

for(let i = 0; i< 100; i+=2){
  arr.push(i)
}
for(let i = 110; i< 174; i+=2){
  arr.push(i)
}
for(let i = 200; i< 374; i+=2){
  arr.push(i)
}


let lastIndex = arr.length-1

    while (startingIndex<=lastIndex) {

        let assumedAvarageDifference=(arr[arr.length-1]-arr[startingIndex])/(arr.length-1)
        let avarageSteps = Math.ceil((target-arr[startingIndex])/assumedAvarageDifference)

        if(arr[startingIndex]>target){
            lastIndex = startingIndex
            startingIndex = prevStartingIndex+1
            console.log(`LEFT SEARCH: `, {'start': startingIndex, 'last': lastIndex, 'prev start': prevStartingIndex, 'avarage steps': avarageSteps})

        }   //left search
        if(arr[startingIndex]===target){ targetPosition = startingIndex}
        if(arr[lastIndex]===target){ targetPosition = lastIndex}
        if(arr[startingIndex]===target || arr[lastIndex]===target)break
        console.log({'start': startingIndex, 'last': lastIndex, 'prev start': prevStartingIndex, 'avarage steps': avarageSteps,'counter': counter})
        prevStartingIndex = startingIndex
        startingIndex += avarageSteps
        lastIndex -= 1
        counter += 1
        if(arr[startingIndex]===target){targetPosition = startingIndex}
        if(arr[lastIndex]===target){ targetPosition = lastIndex}
        if(arr[startingIndex]===target || arr[lastIndex]===target)break
    }


console.log(arr)




  return (
    <div>
        <div>target number: {target}</div>
        <div>target nubmer position: {targetPosition}</div>
        <div>counter: {counter}</div>
    </div>
  )
}

export default Leftfbs3




// import React, {useState} from 'react'


// function Leftfbs3() {
// const arr = [ 1,2,3,4,9999,10000,10001,10002,15468905654643]
// //const arr = [0,1,2,3,4,5,7,8,9,10,11,12,13,15,16,17,18,19,20,21,22,25,26,27,28,29,30,31,32,33,34,35,36,37,41,42,43,45,46,47,48,50,51,52,53,54,55,56,57,59]
// //let arr = [0,1,2,3,4,5,6,7,8,9, 10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49]
// let prevStartingIndex = 0
// let startingIndex = 0
// let lastIndex = arr.length-1
// let targetPosition = 0
// let counter = 1
// const target = 10001




//     while (startingIndex<=lastIndex) {

//         let assumedAvarageDifference=(arr[arr.length-1]-arr[startingIndex])/(arr.length-1)
//         let avarageSteps = Math.ceil((target-arr[startingIndex])/assumedAvarageDifference)

//         if(arr[startingIndex]>target){
//             lastIndex = startingIndex
//             startingIndex = prevStartingIndex+1
//             console.log(`LEFT SEARCH: `, {'start': startingIndex, 'last': lastIndex, 'prev start': prevStartingIndex, 'avarage steps': avarageSteps})

//         }   //left search
//         if(arr[startingIndex]===target){console.log(`Element found at the recent start: ${startingIndex}`), targetPosition = startingIndex}
//         if(arr[lastIndex]===target){console.log(`Element found at the recent last: ${lastIndex}`), targetPosition = lastIndex}
//         if(arr[startingIndex]===target || arr[lastIndex]===target)break
//         console.log({'start': startingIndex, 'last': lastIndex, 'prev start': prevStartingIndex, 'avarage steps': avarageSteps,'counter': counter})
//         prevStartingIndex = startingIndex
//         startingIndex += avarageSteps
//         lastIndex -= 1
//         counter += 1
//         if(arr[startingIndex]===target){console.log(`Element found at the recent start: ${startingIndex}`), targetPosition = startingIndex}
//         if(arr[lastIndex]===target){console.log(`Element found at the recent last: ${lastIndex}`), targetPosition = lastIndex}
//         if(arr[startingIndex]===target || arr[lastIndex]===target)break
//     }







//   return (
//     <div>
//         <div>target number: {target}</div>
//         <div>target nubmer position: {targetPosition}</div>
//         <div>counter: {counter}</div>
//     </div>
//   )
// }

// export default Leftfbs3