import React from 'react'

function ShoeItem(props) {
    return (
        <div className='border-2 p-2 rounded-md space-y-2' key={props.index}>
            <img src={props.item.image} alt="" />
            <h2 className='text-2xl font-semibold'>{props.item.name}</h2>
            <p className='text-lg text-gray-500'>Giá tiền: {props.item.price}</p>
            <div className="space-x-4">
            <button onClick={()=>{props.addShoeCart(props.item)}} className='py-2 px-5 rounded-md text-white bg-black'>Add to cart</button>
            <button onClick={()=>{props.showDetailShoe(props.item)}} className='py-2 px-5 rounded-md text-white bg-black'>Detail</button>
            </div>
        </div>
    )
}

export default ShoeItem
