import React, { useState, useEffect } from "react";
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;


function Getdata() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}/`)
      .then((response) => {
        // Check if the response is successful
        if (response && response.data) {
          setData(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App2">
      <h1>Server Data</h1>
      {data.length > 0 ? (
        <div>
          {data.map((movie, index) => (
            <div key={index}>
              <h2>{movie.title}</h2>
              <p>Year: {movie.year}</p>
              <p>Genre: {movie.genre}</p>
              <p>Actors:</p>
              <ul>
                {Object.values(movie.actors).map((actor, i) => (
                  <li key={i}>{actor}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Getdata;
