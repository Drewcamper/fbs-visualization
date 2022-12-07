const FocusedBinarySearchOne = () => {
    const minusOne = -1
    //const originalArray = [ 0, 0.1, 0.23, 0.389, 0.4, 0.5, 0.55, 0.61, 0.78, 0.9]   //random sorted array
    //const originalArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    const originalArray = [0,1,2,3,4,5,6,7,8,9]
    //const originalArray = [0, 0.1, 0.12, 2, 7, 21.7, 22, 25, 26.6, 30, 31, 10009, 12130, 16780, 3000000, 3000001]
    let array = originalArray
    let start = array[0]  //(===0)
    let end = array[array.length-1]    //(===0.9)
    let prevStart = originalArray[0]
    let prevEnd = originalArray[originalArray.length-1]
    let targetNumberPosition = minusOne
    const targetNumber = 3    // the array must contains the target number. This is what we are searching for.
    let stepCounter = 0
    let breakOut = false
    let avarageDifference = (end-start)/(array.length-1)     //avarage difference between 2 elements.(===0.1)
    let avarageElementsOnTheLeft = Math.ceil((targetNumber-start)/avarageDifference)      //gives back the avarage number of elements on the left, from     start until targetNumber.(===4)
    let avarageElementsOnTheRight = Math.ceil((end-targetNumber)/avarageDifference)     //gives back the avarage number of elements on the right. From the end until targetNumber.(===5)  NAME IT 'avarageElementsOnTheRight'    
    let cuttedStart = 0
    let cuttedEnd = 0
    if(isNaN(targetNumberPosition)){console.log('NaN')}

console.log(array.slice(3,7))

    const centerSearch = () => {

        while(start<=end){
            if(targetNumberPosition!==minusOne) break
            
            if(start===targetNumber){targetNumberPosition = targetNumberPosition += cuttedStart + start && breakOut===true}     //cheks if start is the target number.  
           
            if(breakOut===true) break
                
            if(targetNumber<start){leftSearch()}    //cheks if target number is less then start.

            if(end===targetNumber){targetNumberPosition += cuttedStart + start && breakOut===true}     //cheks if end is the target number.

            if(breakOut===true) break

            if(targetNumber>end){rightSearch()}     //cheks if target number is greater than end.

            // --> the target number is greater than start && less than end.
            cuttedStart += avarageElementsOnTheLeft
            cuttedEnd += avarageElementsOnTheRight
            prevStart = start
            prevEnd = end
            start = array[avarageElementsOnTheLeft]
            end = array[avarageElementsOnTheRight]
            array = array.slice(start, array[avarageElementsOnTheRight+1])

            stepCounter +=1
            console.log('end of the loop')
        }
        
    }


    const leftSearch = () => {   //sets the values to the new default, so centerSearch can search in a smaller section.
        cuttedStart += avarageElementsOnTheLeft
        prevStart = start
        prevEnd = end
        array = array.slice(start, array[avarageElementsOnTheLeft+1])
        end=start
        start=prevStart
        stepCounter +=1
        console.log('left search line 70')
        centerSearch()      
    }

    const rightSearch = () => {     //sets the values to the new default, so centerSearch can search in a smaller section.
        cuttedEnd += avarageElementsOnTheRight
        prevStart = start
        prevEnd = end
        array = array.slice(start, array[avarageElementsOnTheRight+1])
        start = end
        end = prevEnd
        stepCounter +=1
        console.log('right search line 82')
        centerSearch()
    }
        
        console.log('target number position: ' + targetNumberPosition)
        if(start===targetNumber){targetNumberPosition = start}    //cheks if start is the target number    
        console.log('target number position: ' + targetNumberPosition)
        if(end===targetNumber){targetNumberPosition = array.length}    //cheks if end is the target number
        console.log('target number position: ' + targetNumberPosition)
        cuttedStart += avarageElementsOnTheLeft
        cuttedEnd += avarageElementsOnTheRight
        start = array[avarageElementsOnTheLeft]
        end = array[avarageElementsOnTheRight]
        array = array.slice(start-1, array.length-end)
        stepCounter +=1
        //IT STARTS FROM 0.9 --> start === 0.9 --> array
        console.log('the array has been changed for the first time to')
        console.log(array)
        console.log(start)
        console.log(end)
        console.log('avarage elements of the left: ' + avarageElementsOnTheLeft)
        console.log('avarage elements of the right: ' + avarageElementsOnTheRight)

        
        console.log('start: ' + start + ' end: ' + end + ' array: ' + array + ' target number position: ' + targetNumberPosition + ' steps: '+stepCounter)
        console.log(avarageDifference)

        console.log('ARRAY STARTS')
        if(isNaN(targetNumberPosition)){console.log('NaN')}

centerSearch()
					
    return(
        <div>
            <div>Number {targetNumber} is at the position of {targetNumberPosition}</div>
            <div>Leaps taken: {stepCounter}</div>
        </div>
    )
}
export default FocusedBinarySearchOne