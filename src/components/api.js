import React,{useEffect, useState} from "react";

const BASE_URL = 'https://www.googleapis.com';
const API_KEY = 'AIzaSyDIS0mcD0BOiscRGgESKxoTPWuo8QMF2Oc';
const BookFetch = ({query}) =>{
  const[data, setData] = useState([]);
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState();

  useEffect(() =>{
    const fetchData = async () => {
      if(!query) return;

      try{ 
        const response = await fetch(`${BASE_URL}/books/v1/volumes?q=${encodeURIComponent(query)}&key=${API_KEY}`);
        if(!response.ok){
          throw new Error('Network response was not ok.');
        }

        const data = await response.json();
        console.log(data);
        setData(data.items || []);
        setLoading(false);
      } catch(error){
        setError(error.message);
        setLoading(false);

      };
    }
    fetchData();
  }, [query]);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.volumeInfo.title}</li> // Use item.key as key since id is not available
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookFetch;