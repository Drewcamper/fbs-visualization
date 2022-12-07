const FocusedBinarySearchLeftOne = () =>{

    const originalArray = [0,1,2,3,4,5,6,7,8,9]
    const targetNumber = 8
    const minusOne = -1
    let array = originalArray
    let targetNumberIndex = minusOne
    let startingIndex = 0   
    const endingIndex = array.length-1
    let prevStartingIndex = 0
    let prevArray = originalArray.slice(prevStartingIndex, endingIndex+1)
    let stepCounter = 1
    let breakOut = false
    let avarageDifference = (endingIndex-startingIndex)/endingIndex
    let avarageElementsOnTheLeft = Math.ceil((targetNumber-array[startingIndex])/avarageDifference)
    let targetNumberIndexInOriginalArray = 0


    const centerSearch = () => {
        console.log('starting index: ' + startingIndex)
        console.log('ending index: ' + endingIndex)
        while(startingIndex<=endingIndex){
            console.log('target number index: ' + targetNumberIndex)
            if(targetNumberIndex!==minusOne)break
            console.log('target number index: ' + targetNumberIndex)
            if(targetNumber===array[startingIndex]){targetNumberIndex += (startingIndex + targetNumberIndexInOriginalArray) && breakOut===true}
            if(breakOut===true) break
            if(targetNumber<array[startingIndex]){leftSearch()}
            if(targetNumber === array[endingIndex]){targetNumberIndex += (endingIndex + targetNumberIndexInOriginalArray) && breakOut===true}
            if(breakOut===true) break
            if(targetNumber>array[endingIndex]){rightSearch()}

            // --> the target number is greater than start && less than end.

            targetNumberIndexInOriginalArray += startingIndex
            prevStartingIndex = startingIndex
            
            array = array.slice(startingIndex)
            stepCounter += 1

            console.log('end of the loop')
        }
        console.log('target number index: ' + targetNumberIndex)
    }


    const leftSearch = () => {
        array = prevArray.slice(prevStartingIndex)   //setting up the new array
        prevStartingIndex = endingIndex
        startingIndex = avarageElementsOnTheLeft
        stepCounter += 1
        centerSearch()
    }

    const rightSearch = () => {
        array = prevArray.slice(prevStartingIndex)
        prevStartingIndex = endingIndex
        startingIndex = avarageElementsOnTheLeft
        stepCounter += 1
        centerSearch()

    }

    if(targetNumber === array[startingIndex]){targetNumberIndex = startingIndex}
    if(targetNumber === array[endingIndex]){targetNumberIndex = endingIndex}
    
    if(targetNumberIndex === minusOne){
        startingIndex = avarageElementsOnTheLeft
        array = array.slice(startingIndex)
        stepCounter += 1
        centerSearch()
    }
    return(
        <div>
            <div>Number {targetNumber} is at the position of {targetNumberIndex}</div>
            <div>Leaps taken: {stepCounter}</div>
        </div>
    )

}
export default FocusedBinarySearchLeftOne