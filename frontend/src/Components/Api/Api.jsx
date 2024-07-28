import React, { useState, useEffect } from "react";
import axios from "axios";

const Api = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/backend/")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>api</h1>
      <p>{message}</p>
    </div>
  );
};

export default Api;
