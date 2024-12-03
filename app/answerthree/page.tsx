"use client"

import React, { useState, useEffect } from "react";

const page = () => {
  const [data, setData] = useState([]); // State to hold fetched data
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track errors

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result); // Update the data state with the API response
          setLoading(false); // Update loading state
          console.log(data)
      } catch (err) {
        setError(err.message); // Update error state if there's an issue
        setLoading(false);
      }
    };

    fetchData(); // Call the fetch function
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Conditional rendering based on loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
      <div className='p-16'>
      <h1 className="text-bold text-2xl">API Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li> // Display each item's title
        ))}
      </ul>
      </div>
  )
}

export default page
