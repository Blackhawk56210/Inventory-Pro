import React from 'react'

function ColumnHeaders() {
  const headers = [
    "Number ID", "Name", "Type", "Price", "Quantity", "Arrival", "Time",
  ];
  const columnHeaders = headers.map((headers, index) => 
    <thead key={index}>{headers.text}</thead>
  )
  return (
    <>
    <thead>{columnHeaders}</thead>
    </>
  )
}

export default ColumnHeaders