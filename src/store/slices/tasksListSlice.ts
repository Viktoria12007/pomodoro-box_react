import {createSlice} from "@reduxjs/toolkit";

export const tasksListSlice = createSlice({
    name: 'tasksList',
    initialState: {
        tasks: localStorage.pomodoroTasks ? JSON.parse(localStorage.pomodoroTasks) : [],
        selectedTask: null,
    },
    reducers: {
        selectTask: (state, action) => {
            state.selectedTask = action.payload
        },
        addTask: (state, action) => {
            state.tasks.push(action.payload)
        },
        deleteTask: state => {
            console.debug('deleteTask');
            const indexTask = state.tasks.findIndex((item) => item.id === state.selectedTask.id)
            state.tasks.splice(indexTask, 1)
        },
        editTask: (state, action) => {
            console.debug('editTask', action.payload)
            const currentTask = state.tasks.find((item) => item.id === state.selectedTask.id)
            console.log(currentTask);
            if (action.payload.value === 'increase') {
                currentTask[action.payload.key] += 1
            } else if (action.payload.value === 'decrease' && currentTask[action.payload.key] > 1) {
                currentTask[action.payload.key] -= 1
            }
        },
    },
})

export const selectTasks = state => state.tasksList.tasks;
export const selectSelectedTask = state => state.tasksList.selectedTask;
export const selectLengthTasks = state => state.tasksList.tasks.length;
export const selectTotalTime = state => {
    return state.tasksList.tasks.reduce((time, task) => time + task.pomodoro, 0) * state.pomodoro.pomodoro;
};
export const selectFirstTask = state => state.tasksList.tasks[0];

export const { selectTask, addTask, deleteTask, editTask } = tasksListSlice.actions;
export default tasksListSlice.reducer;
