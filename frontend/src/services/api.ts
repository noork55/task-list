import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/tasks',
});

export const getTasks = () => api.get('/');
export const getTaskById = (id: string) => api.get(`/${id}`);
export const createTask = (task: { title: string; description: string }) => api.post('/', task);
export const updateTask = (id: string, task: { title: string; description: string }) => api.put(`/${id}`, task);
export const deleteTask = (id: string) => api.delete(`/${id}`);