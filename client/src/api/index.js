import axios from "axios"

const url = "http://localhost:5000/tasks"

export const fetchTasks = () => axios.get(url);
export const createTask = (newTask) => axios.post(url, newTask);
export const updateTask = (updatedTask) => axios.patch(`${url}/${updatedTask._id}`, updatedTask);
export const deleteTask = (deletedTask) => axios.delete(`${url}/${deletedTask._id}`);
