import React, { useState, useEffect } from "react";
import api from '../config/api';

const Home = () => {
  const [data, setData] = useState([]);

  async function fetchData() {
    const result = await api.get('/posts')
    setData(result.data.data)
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  )
};

export default Home;