import * as api from "../api"

export const getTasks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTasks();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createTask = (task) => async (dispatch) => {
    try {
        const {data} = await api.createTask(task)
        dispatch({type:"CREATE_TASK",payload:data});
    } catch (error) {
        console.log(error)
    }
}

export const updateTask = (task) => async (dispatch) => {
    try {
        const {data} = await api.updateTask(task)
        dispatch({type:"UPDATE_TASK",payload:data});
    } catch (error) {
        console.log(error)
    }
}

export const deleteTask = (task) => async (dispatch) => {
    try {
        console.log("hfe")
        await api.deleteTask(task)
        dispatch({type:"DELETE_TASK",payload:task});
    } catch (error) {
        console.log(error)
    }
}