import React from "react";

function Table() {
  return (
    <>
      <div className="bg-sky-200 w-screen">
        <table className="table-auto">
          <thead>
            <tr>
              <th>I.D.</th>
              <th>Name</th>
              <th>Type</th>
              <th className="bg-amber-700">Price</th>
              <th>Quantity</th>
              <th>Arrival Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>data</td>
              <td>data</td>
              <td>1961</td>
            </tr>
            <tr>
              <td>data</td>
              <td>data</td>
              <td>data</td>
            </tr>
            <tr>
              <td>data</td>
              <td>data</td>
              <td>1975</td>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
