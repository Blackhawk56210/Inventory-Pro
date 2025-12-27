import React, { useState, useEffect } from 'react';


function Table() {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.kroger.com/v1/products`);
        if (!res.ok) {
          throw new Error(`error status ${res.status}`)
        }
        const json = await res.json();
          setData( json.data || [] );
          setIsLoading( false );
      } catch (error) {
          console.log("Data Fetch Failure: ", error)
          setError(error);
          setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div> Loading... </div>
  }

  if (error) {
    return <div> Error: {error.message} </div>
  }

  const columnHeaders = Array.isArray(data) && data.length > 0
  // checking if my data is an array and has a length greater than 0 .isArray does this
    obj.keys(data[0]).map((key, index) => 
      // .keys()  retrieve the names of the properties (or keys) 
      // within a data structure like a dictionary or object. 
      <th key={index}>{key}</th>
  ), [];

  useEffect

  return (
    <>
      <div className="bg-sky-200 overflow-x-auto">
        <table className="table-auto">
          <thead>
            <tr>
              {columnHeaders}
            </tr>
          </thead>
          <tbody>
            {/* I'm pretty sure I did this wrong or at least in the wrong spot */}
            {Array.isArray(data) && data.map((item, index) => (
              <tr key={index}>
                {obj.values(item).map((value, valueIndex) => (
                  <td key={valueIndex}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
