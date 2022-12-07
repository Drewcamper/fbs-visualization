const FocusedBinarySearchLeftTwo = () => {  //let's do left search
    const originalArray = [10,11,12,13,14,15,16,17,180,190]
    const targetValue = 180

    let minusOne = -1
    let startingIndex = 0
    let targetIndex = minusOne //That's what we are searching for
    let prevStartingIndex = 0
    let avarageDifference=(originalArray[originalArray.length-1]-originalArray[startingIndex])/(originalArray.length-1)
    let avarageSteps = Math.ceil((targetValue-originalArray[startingIndex])/avarageDifference)
    let leapCounter = 0


    // 0-10, 4k-5k, 1B-1B100, 1T. 1111 length
    // 4003

    // 0, 1B, 1B1, 1B2

    // const leftSearch = () => {
    //     startingIndex = prevStartingIndex
    //     prevStartingIndex = startingIndex
    //     avarageSteps = Math.ceil((targetValue))
    // }
    
    //cheks if the last element === targetValue
        
        while(startingIndex<=originalArray.length-1){

        //while the value at startingIndex or the value at originalArray.length-1 will be equal to the target value
        if(targetValue===originalArray[startingIndex]){targetIndex = startingIndex}
        if(targetValue===originalArray[startingIndex]) break
        if(targetValue===originalArray[startingIndex]) break
        if(targetValue<originalArray[startingIndex]){
            //we can set the last index to the startingIndex     endingIndex = startingIndex
            console.log({'starting index': startingIndex, 'prev starting index': prevStartingIndex, 'avarage steps': avarageSteps, 'avarage difference': avarageDifference})
            startingIndex = prevStartingIndex
            leapCounter += 1
           
            console.log({'avarage difference (at left search)': avarageDifference, 'starting index (at left search)': startingIndex, 'prev starting index (at left search)': prevStartingIndex})

            continue
        }
        if(targetValue<originalArray[prevStartingIndex]) break
        prevStartingIndex = startingIndex
        startingIndex = avarageSteps
        avarageDifference = (originalArray[originalArray.length-1]-originalArray[startingIndex])/(originalArray.length-1)
        avarageSteps = Math.ceil((targetValue-originalArray[startingIndex])/avarageDifference)
        leapCounter += 1
        }
    console.log('end of loop')
    return(
        <div>
            <div>target number: {targetValue}</div>
            <div>target number index: {targetIndex}</div>
            <div>leap has been taken: {leapCounter}</div>
        </div>
    )
}
export default FocusedBinarySearchLeftTwo

//  const SearchTwo = () => {

//     const array = [1,2,3,7,8,9,10,14,177,189,273,345]
//     const targetNumber = 14
//     const minusOne = -1
//     let startingIndex = 0
//     let endingIndex = array.length-1 
//     let targetnumberindex = minusOne    //We are searching for this one
//     let avarageDifference=(array[array.length-1]-array[startingIndex])/(array.length-1)



//     while(startingIndex<=endingIndex){
//         targetnumberindex = startingIndex
//         console.log({startingindex: startingIndex, targetnumberindex: targetnumberindex})
//         if(array[startingIndex]===targetNumber) break
//         if(targetNumber<array[startingIndex]){console.log('out of search')}
//         startingIndex+=1
//     }






//     return (
//         <div>
//             <div>searched value: {targetNumber}</div>
//             <div>index of the searched value: {targetnumberindex}</div>

//         </div>
//     )

//  }
//  export default SearchTwo