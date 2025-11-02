import React from 'react'

function ColumnHeaders() {
  const headers = [
    "I.D.", "Name", "Type", "Price", "Quantity", "Arrival", "Time",
  ];
  const mapped = headers.map((headers, index) => 
    <h3 key={index}>{headers.text}</h3>
  )
  return (
    <>
    <h3>{mapped}</h3>
    </>
  )
}

export default ColumnHeaders