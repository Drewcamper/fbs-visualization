const FocusedBinarySearch = () => {

    //const originalArray = [ 0, 0.1, 0.23, 0.389, 0.4, 0.5, 0.55, 0.61, 0.78, 0.9]   //random sorted array
    const originalArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    //const originalArray = [0,1,2,3,4,7,9,11,13,14,23,24,65,89,90,91,92,93,94,95]
    let array = originalArray
    let start = array[0]  //(===0)
    let end = array[array.length-1]    //(===0.9)
    let prevStart = originalArray[0]
    let prevEnd = originalArray[originalArray.length-1]
    let targetNumberPosition = undefined
    const targetNumber = 6    // the array must contains the target number. This is what we are searching for.
    let stepCounter = 0
    let breakOut = false
    let avarageDifference = (end-start)/(array.length-1)     //avarage difference between 2 elements.(===0.1)
    let avarageElementsOnTheLeft = Math.ceil((targetNumber)/avarageDifference)      //gives back the avarage number of elements on the left, from     start until targetNumber.(===4)
    let avarageElementsOnTheRight = Math.ceil((end-targetNumber)/avarageDifference)     //gives back the avarage number of elements on the right. From the end until targetNumber.(===5)  NAME IT 'avarageElementsOnTheRight'    
    let cuttedStart = 0
    let cuttedEnd = 0




    const centerSearch = () => {

        while(start<=end){
            console.log('target number position: ' + targetNumberPosition)      //'not known'
            if(targetNumberPosition!==undefined) break
            console.log('start: ' + start)
            console.log('cutted start plus: ' + cuttedStart)
            if(start===targetNumber){targetNumberPosition = targetNumberPosition === undefined ? cuttedStart : targetNumberPosition && breakOut===true}     //cheks if start is the target number.      HERE IS THE PROBLEM!!!!!!!!
            console.log('start===targetnumber')
            console.log('target number position: ' + targetNumberPosition)
            console.log('cutted start: ' + cuttedStart)
            if(breakOut===true) break
                
            if(targetNumber<start){leftSearch()}    //cheks if target number is less then start.

            if(end===targetNumber){targetNumberPosition = targetNumberPosition === undefined ? cuttedEnd : targetNumberPosition && breakOut===true}     //cheks if end is the target number.
            console.log('end===targetnumber')
            if(breakOut===true) break

            if(targetNumber>end){rightSearch()}     //cheks if target number is greater than end.


            // --> the target number is greater than start && less than end.
            cuttedStart += avarageElementsOnTheLeft
            cuttedEnd += avarageElementsOnTheRight
            prevStart = start
            prevEnd = end
            array = array.slice(start, array[avarageElementsOnTheRight+1])
            start = array[avarageElementsOnTheLeft]
            end = array[avarageElementsOnTheRight]
            stepCounter +=1
            console.log('end of the loop')
        }
        console.log('target number position: ' + targetNumberPosition)
        if(targetNumberPosition===undefined){centerSearch()}
    }


    const leftSearch = () => {   //sets the values to the new default, so centerSearch can search in a smaller section.
        cuttedStart += avarageElementsOnTheLeft
        prevStart = start
        prevEnd = end
        array = array.slice(start, array[avarageElementsOnTheLeft+1])
        end=start
        start=prevStart
        stepCounter +=1
        console.log('left search')
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
        console.log('right search')
        centerSearch()
    }

    

        console.log(1)
        if(start===targetNumber){targetNumberPosition += (start + cuttedStart)}    //cheks if start is the target number    
        console.log(2)
        if(end===targetNumber){targetNumberPosition += (end + cuttedEnd)}    //cheks if end is the target number
        console.log(3)
        cuttedStart += avarageElementsOnTheLeft
        cuttedEnd += avarageElementsOnTheRight
        start = array[avarageElementsOnTheLeft]
        end = array[avarageElementsOnTheRight]
        array = array.slice(start, end)
 
        console.log('start: ' + start)
        console.log('end: ' + end)
        console.log('array: ' + array)
        
        

console.log('target number position: ' + targetNumberPosition)
console.log('steps: '+stepCounter)
console.log('array starts')
centerSearch()
					
    return(
        <div>
            <div>Number {targetNumber} is at the position of {targetNumberPosition+1}</div>
        </div>
    )
}
export default FocusedBinarySearch