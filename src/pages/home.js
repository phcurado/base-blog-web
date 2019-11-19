import React, { useState, useEffect } from "react";
import api from '../config/api';
import { Table } from "../components";

const Home = () => {
  const [data, setData] = useState([]);

  async function fetchData() {
    const result = await api.get('/posts')
    setData(result.data.data)
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (<Table list={data}></Table>)
};

export default Home;