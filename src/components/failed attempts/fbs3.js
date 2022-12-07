const FocusedBinarySearchThree = () => {
    const originalArray = [1,2,3,4,5,6,7,8,9,100,101]
    let array = originalArray
    let startingIndex = 0
    let lastIndex = array.length-1
    const targetValue = 7
    let counter = 1
    let avarageDifference = (array[lastIndex]-array[startingIndex])/(array.length-1)
    let avarageSteps = Math.ceil((targetValue-array[startingIndex])/avarageDifference)

        
    console.log(avarageSteps)
    
    const leftSearch = () => {
        lastIndex=startingIndex
        startingIndex = startingIndex -= avarageSteps
        avarageDifference = (lastIndex-startingIndex)/(array.length-1)
        avarageSteps = (targetValue-array[startingIndex])/avarageDifference
        counter += 1
        console.log('right search')
        centerSearch()
    }

    const centerSearch = () => {
        console.log('center search')
        while(startingIndex<=lastIndex){
        console.log('starting index: ' + startingIndex)
        console.log('last index: ' + lastIndex)
        console.log('avarage difference: ' + avarageDifference)
        console.log('avarage steps: ' + avarageSteps)
        console.log(array)
        if(targetValue===array[startingIndex])break

        if(targetValue<array[startingIndex]){
            leftSearch()
        }


        startingIndex+=avarageSteps
        // avarageDifference = (lastIndex-startingIndex)/(array.length-1)
        avarageSteps = Math.ceil(targetValue-array[startingIndex])/avarageDifference
        counter += 1

        if(counter>20) break
       
        }
    }
    centerSearch()
    return(
        <div>
            <div>target number: {targetValue}</div>
            <div>counter: {counter}</div>
            <div>target index: {startingIndex}</div>

        </div>
    )
}
export default FocusedBinarySearchThree