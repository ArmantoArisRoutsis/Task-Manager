export default (tasks=[],action) =>{
    switch (action.type){
        case "FETCH_ALL":
            return action.payload;
        case "CREATE_TASK":
            return [...tasks,action.payload];
        case "UPDATE_TASK":
            return tasks.map(task=> task._id === action.payload._id? action.payload: task);
        case "DELETE_TASK":
            return tasks.filter(task=>task._id !== action.payload);
        default: 
            return tasks
    }
}