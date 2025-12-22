
function Table() {
  const header = [
    "Number ID", "Name", "Type", "Price", "Quantity", "Arrival", "Time",
  ];
  const columnHeaders = header.map((header, index) => 
    <th key={index}>{header}</th>
  );

  return (
    <>
      <div className="bg-sky-200 overflow-x-auto">
        <table className="table-auto">
          <tbody>
            <thead>
              <tr>
                {columnHeaders}
              </tr>
            </thead>
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
