import React from 'react'

function ColumnHeaders() {
  const headers = [
    "Number ID", "Name", "Type", "Price", "Quantity", "Arrival", "Time",
  ];
  const columnHeaders = headers.map((headers, index) => 
    <p key={index}>{headers.text}</p>
  )
  return (
    <>
    <p>{columnHeaders}</p>
    </>
  )
}

export default ColumnHeaders