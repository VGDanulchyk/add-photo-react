import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from './Images/imagesReducer';

const store = configureStore({
    reducer: {
        images: imagesReducer,
    },
});

export default store;