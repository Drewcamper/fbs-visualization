import { useState } from "react"
import './inputSelectors.css'



const ArrayGenerator = () => {

    const [lastElement, setLastElement] = useState(10)
    const [arrayToDisplay, setArrayToDisplay] = useState('Please generate an array...')
    const [differenceMultiplier, setDifferenceMultiplier] = useState(1)
    const [newArr] = useState([])

    //let newArr = []
    let diff = 3
  

    const errorHandler = () => {
        for(let i=0; i<=newArr.length; i++){
            if(newArr[i]>newArr[i+1]){
                console.log('This is not a sorted array!')
            }else{
                console.log('The array is sorted!')
            }
        }
        console.log('last element: ' + lastElement)
        console.log('differenceMultiplier: ' + differenceMultiplier)
        console.log('arrayToDisplay: ' + arrayToDisplay)
        
    }
       
  
    const arrayDisplaying = () => {
        
        if(newArr===[]){setArrayToDisplay('The array has no element.')}
        if(newArr.length===1){setArrayToDisplay(`${newArr[0]}`)}
        if(newArr.length===2){setArrayToDisplay(`${newArr[0]}; ${newArr[1]}`)}
        if(newArr.length===3){setArrayToDisplay(`${newArr[0]}; ${newArr[1]}; ${newArr[2]}`)}
        if(newArr.length===4){setArrayToDisplay(`${newArr[0]}; ${newArr[1]}; ${newArr[2]}; ${newArr[3]}`)}
        if(newArr.length===4){setArrayToDisplay(`${newArr[0]}; ${newArr[1]}; ${newArr[2]}; ${newArr[3]}; ${newArr[4]}`)}
        if(newArr.length>=6){setArrayToDisplay(`${newArr[0]}; ${newArr[1]}; ${newArr[2]}; ${newArr[3]}...${newArr[newArr.length-3]}; ${newArr[newArr.length-2]}; ${newArr[newArr.length-1]}`)}
        
    }

    const  generateArray = () => {
        for (let i = 0; i <= lastElement; i += diff) {
            //setNewArr(newArr.push(i.toFixed(4)))  
            newArr.push(i.toFixed(4))
            console.log('diference: ' + diff)
            diff=Math.random()*differenceMultiplier
           //diff = Math.floor(Math.random() * differenceMultiplier)
        }  
        console.log(newArr)
    }

    


    return (

        <div>
            <button onClick={errorHandler}>debuging</button>          
            <div className="inputSelectors">
                <p className="inputText">last element</p>
                <input className="input" onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                        setLastElement(event.target.value)
                    }                  
                }}/>hit enter to submit
            </div>
            <div className="inputSelectors">
                <p className="inputText">difference</p>
                <input className="input" onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                        setDifferenceMultiplier(event.target.value)
                        console.log(event.target.value)
                    }                  
                }}/>hit enter to submit
            </div>          
            <button onClick={generateArray}>generate array</button>
            <button className='button' onClick={arrayDisplaying}>show array</button>
            <div>{arrayToDisplay}</div>
        </div>


    )



}

export default ArrayGenerator