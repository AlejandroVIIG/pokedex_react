import { createSlice } from "@reduxjs/toolkit";

const trainerNameSlice = createSlice({
    name: "trainerName",
    initialState: "",
    reducers: {
        setTrainerName: function(state, action) {
            const trainerName = action.payload;
            return trainerName;

        }
    }
});

export const { setTrainerName } = trainerNameSlice.actions;

export default trainerNameSlice.reducer;