import { createSlice } from '@reduxjs/toolkit';

export const citySlice = createSlice({
    name: 'city',
    initialState: {
        listOfCities: []
    },
    reducers: {
        addCity: (state, action) => {
            state.listOfCities.push(action.payload);
        },
        removeCity: (state, action) => {
            state.listOfCities = state.listOfCities.filter(city => city.id !== action.payload.id);
        }
    }
});

export const { addCity, removeCity } = citySlice.actions;

export default citySlice.reducer;