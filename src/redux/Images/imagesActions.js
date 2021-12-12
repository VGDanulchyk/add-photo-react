import { createAction } from '@reduxjs/toolkit';

const addImageRequest = createAction('images/addRequest');
const addImageSuccess = createAction('images/addSuccess');
const addImageError = createAction('images/addError');

const getImagesRequest = createAction('images/getRequest');
const getImagesSuccess = createAction('images/getSuccess');
const getImagesError = createAction('images/getError');

const removeImageRequest = createAction('images/removeRequest');
const removeImageSuccess = createAction('images/removeSuccess');
const removeImageError = createAction('images/removeError');

const removeImage = createAction('images/remove');

export default {
    addImageRequest,
    addImageSuccess,
    addImageError,
    getImagesRequest,
    getImagesSuccess,
    getImagesError,
    removeImageRequest,
    removeImageSuccess,
    removeImageError,
    removeImage,
};
