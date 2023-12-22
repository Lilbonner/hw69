import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchShows = createAsyncThunk('tvShow/fetchShows', async (query) => {
    const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${query}`);
    return response.data;
});

export const tvShowSlice = createSlice({
    name: 'tvShows',
    initialState: {shows: [], status: 'idle', error: null},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchShows.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchShows.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.shows = action.payload;
            })
            .addCase(fetchShows.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default tvShowSlice.reducer;