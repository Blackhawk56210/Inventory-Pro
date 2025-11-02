import ColumnHeaders from "./Column-Headers";

function Table() {
    const headers = [
        "I.D.", "Name", "Type", "Price", "Quantity", "Arrival", "Time",
    ];
  const mapped = headers.map((headers, index) => 
    <h3 key={index}>{headers.text}</h3>
  )

//   Finish mapping over other rows and setting up table
  return (
    <>
      <div className="bg-sky-200 w-screen">
        <table className="table-auto">
          <h3>{headers}</h3>
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
