import React from 'react'

function Practice2({ completedData }) {
  return (
    <>
     <div className='Box-2' >
           COMPLETED LIST
           {completedData.map((data, index) => {
              return(
                <div key={index} className = 'completedItems'>
                <h2>{data.work}</h2>
                </div>
              )
           })}
     </div>
    </>
  )
}

export default Practice2