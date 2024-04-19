import {createSlice} from "@reduxjs/toolkit";

export const pomodoroSlice = createSlice({
    name: 'pomodoro',
    initialState: {
        pomodoro: 25,
    },
    reducers: {
        setPomodoro: (state, action) => {
            state.pomodoro = action.payload
        }
    }
})

export const { setPomodoro } = pomodoroSlice.actions;
export default pomodoroSlice.reducer;
