import { configureStore } from '@reduxjs/toolkit';
import tvShowReducer from '../Components/tvShowSlice.tsx';

export default configureStore({
    reducer: {
        tvShow: tvShowReducer,
    },
});