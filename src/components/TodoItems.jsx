import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete_icon.png'

const TodoItems = ({text,delTask,tickCheck,toggleClick}) => {
  return (
    <div className='flex flex-1 justify-between items-center my-3 gap-2'>
        <div className='flex flex-1 items-center cursor-pointer' onClick={() => toggleClick()}>
          {tickCheck ? (<img className='w-4 h-4' src={tick} alt="" />) :
            (<img className='w-4 h-4' src={not_tick} alt="" />)
          }
            <p className={`ml-2 text-[15px] ${tickCheck ? 'line-through' : ''}`}>{text}</p>
        </div>

        
            <img className='w-3.5' src={delete_icon} onClick={delTask} alt="" />
      
    </div>
  )
}

export default TodoItems