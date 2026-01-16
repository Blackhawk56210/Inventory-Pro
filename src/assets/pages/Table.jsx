function Table() {

  return (
    <div className="bg-sky-200 overflow-x-auto">
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr>
            {columnHeaders.map((col, idx) => (
              <th key={idx} className="border border-gray-300 px-2 py-1">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {inventoryData.map((item, idx) => (
            <tr key={idx}>
              {Object.values(item).map((val, vIdx) => (
                <td key={vIdx} className="border border-gray-300 px-2 py-1">
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
