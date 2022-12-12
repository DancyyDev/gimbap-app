import React, {useState} from 'react'


function Item1() {
    let [count, setCount] = useState(0)

    let countDownLimit = (count) => {
        if(count < 1){
            return 0
        } else {
            return count - 1
        }
    }

  return (
    <div className="items" >
        <h4>Mom's Gimbap</h4>
        <p>Mom's recipe: Pan-cooked spam, carrots and spinach, with pickled yellow radish and strip of imitation crab.</p>
        <button className='countButtonLeft' onClick={() => setCount(countDownLimit)}>-</button>
        {count}
        <button className='countButtonRight' onClick={() => setCount(count + 1)}>+</button>
        
        <button className='addOrderButton'>Add Order</button>

    </div>
  )
}

export default Item1