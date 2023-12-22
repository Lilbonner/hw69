import { configureStore } from '@reduxjs/toolkit';
import tvShowReducer from '../Components/TvShowSlice.tsx';

export default configureStore({
    reducer: {
        tvShow: tvShowReducer,
    },
});