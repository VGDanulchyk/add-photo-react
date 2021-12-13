import axios from 'axios';
import imagesActions from './imagesActions';
import { apiEndpoint } from '../../envConfig';

const addImage = img =>
        dispatch => {
            dispatch(imagesActions.addImageRequest());

            axios
                .post(`${apiEndpoint}/images`, { img })
                .then(response => dispatch(imagesActions.addImageSuccess(response.data)))
                .catch(error => dispatch(imagesActions.addImageError(error)));
        };

const getImages = () => dispatch => {
    dispatch(imagesActions.getImagesRequest());

    axios
        .get(`${apiEndpoint}/images`)
        .then(({ data }) => dispatch(imagesActions.getImagesSuccess(data)))
        .catch(error => dispatch(imagesActions.getImagesError(error)));
};

const removeImage = id => dispatch => {
    dispatch(imagesActions.removeImageRequest());

    axios
        .delete(`${apiEndpoint}/images/${id}`)
        .then(() => dispatch(imagesActions.removeImageSuccess(id)))
        .catch(error => dispatch(imagesActions.removeImageError(error)));
};

export default {
    addImage,
    getImages,
    removeImage,
};
