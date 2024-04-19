import {configureStore} from "@reduxjs/toolkit";
import tasksListReducer from "./slices/tasksListSlice";
import pomodoroReducer from "./slices/pomodoroSlice";

export default configureStore({
    reducer: {
        tasksList: tasksListReducer,
        pomodoro: pomodoroReducer,
    }
})
