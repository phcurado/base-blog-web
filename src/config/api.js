import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api',
  timeout: 1000
});

api.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJiYXNlX2Jsb2ciLCJleHAiOjE1NzYzNTYzMDMsImlhdCI6MTU3MzkzNzEwMywiaXNzIjoiYmFzZV9ibG9nIiwianRpIjoiMWFlYjFiYjAtZDJlYi00ZjY3LTgzZWYtMGJhMWYwZDc0MDQ0IiwibmJmIjoxNTczOTM3MTAyLCJzdWIiOiIxIiwidHlwIjoiYWNjZXNzIn0.koD0j9stelVYHMQjmj4newuFcAVSF3e-boKPg4bfh4Xw-I39xyh4kOnpHjgSjmV7KxcF1Y0PbFNLEmmZjJ43NA';

export default api;