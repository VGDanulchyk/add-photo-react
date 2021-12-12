import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import imagesActions from './imagesActions';

const addImage = (state, action) => {
    return [...state, action.payload];
};

const removeImage = (state, action) => {
    return state.filter(image => image.id !== action.payload);
};

const items = createReducer([], {
    [imagesActions.getImagesSuccess]: (state, action) => action.payload,
    [imagesActions.addImageSuccess]: addImage,
    [imagesActions.removeImageSuccess]: removeImage,
});

const loading = createReducer(false, {
    [imagesActions.getImagesRequest]: () => true,
    [imagesActions.getImagesSuccess]: () => false,
    [imagesActions.getImagesError]: () => false,
    [imagesActions.addImageRequest]: () => true,
    [imagesActions.addImageSuccess]: () => false,
    [imagesActions.addImageError]: () => false,
    [imagesActions.removeImageRequest]: () => true,
    [imagesActions.removeImageSuccess]: () => false,
    [imagesActions.removeImageError]: () => false,
});

export default combineReducers({
    items,
    loading,
});
