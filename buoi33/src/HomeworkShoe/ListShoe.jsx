import React from 'react'
import ShoeItem from './ShoeItem';
function ListShoe(props) {
  return (
    <div className="list_shoe grid grid-cols-3 gap-5">
        {props.arrShoe.map((item, index) => {
          return <ShoeItem showDetailShoe={props.showDetailShoe} openModalDetail={props.openModalDetail} addShoeCart={props.addShoeCart} item={item} key={index}/>
        })}
      </div>
  )
}

export default ListShoe
