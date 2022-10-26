import React from 'react'
import './main.css'

function Practice({ data, handleClick, addAll }) {
  return (
    <>
           
        <div className='Box-1'>
            TO DO LIST
            {data.map((item, _) => {
                return (
                  <div key={item.id} className = 'items'>
                    <h2 className='work' onClick={() => handleClick(item.id)} >{item.work}</h2>
                  </div>
                )
            })}

            <div> <button className='btn' onClick={() => addAll()}>All Done</button></div>
        </div>
    
    

    </>
  )
}

export default Practice