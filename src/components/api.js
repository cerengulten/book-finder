import React,{useEffect, useState} from "react";

const BASE_URL = 'https://openlibrary.org';

const BookFetch = () =>{
  const[data, setData] = useState([]);
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState();

  useEffect(() =>{
    const fetchData = async () => {
      try{ 
        const response = await fetch(`${BASE_URL}/search.json?title=body`);
        if(!response.ok){
          throw new Error('Network response was not ok.');
        }

        const data = await response.json();
        console.log(data);
        setData(data.docs || []);
        setLoading(false);
      } catch(error){
        setError(error.message);
        setLoading(false);

      };
    }
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.key}>{item.title}</li> // Use item.key as key since id is not available
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookFetch;