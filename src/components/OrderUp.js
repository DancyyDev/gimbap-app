import React from 'react'
import Items from './Item1'

function OrderUp() {
  return (
    <div className='orderUp'>
        <h3>Your Order</h3>
        <h4>Your Quantity: {Items.count}</h4>
    </div>
  )
}

export default OrderUp