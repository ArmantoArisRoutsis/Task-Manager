export default (tasks=[],action) =>{
    switch (action.type){
        case "FETCH_ALL":
            console.log("here")
            return action.payload;
        case "CREATE_TASK":
            return [...tasks,action.payload];
        case "UPDATE_TASK":
            return tasks.map(task=> task._id === action.payload._id? action.payload: task);
        default: 
            return tasks
    }
}