import React from 'react'
import './ReacipeTile.css'

export default function ReacipeTile (props){
    return (
  props.recipe['recipe']['image'].match(/\.(jpeg|jpg|gif|png)$/) != null && 
  (
<div className='reacipeTile' onClick={() => {
   window.open(props.recipe['recipe']['url'])
}}>
<img className='reacipeTile-img' src={props.recipe['recipe']['image']} />
< p className='reacipeTile-name'>{props.recipe['recipe']['label']}</p>
</div>
  )

    )
}