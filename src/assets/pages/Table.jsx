import React, { useState, useEffect } from "react";

function Table() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const json = await res.json();
        setData(json);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setError(err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // dynamically create headers based on first row
  const columnHeaders = data[0] ? Object.keys(data[0]) : [];

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
          {data.map((item, idx) => (
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
