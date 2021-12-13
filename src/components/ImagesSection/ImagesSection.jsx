import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import imagesOperations from "../../redux/Images/imagesOperations";
import ImagesList from "./ImagesList/ImagesList";
import ImageLoader from "./ImageLoader/ImageLoader";

import styles from "./ImageSection.module.css"


const ImagesSection = props => {
    useEffect(() => {
        props.getImages();
    }, []);


    return (
        <div className={styles.card}>
            <ImageLoader/>
            <ImagesList/>
        </div>
    );
};

const mapStateToProps = state => ({
    images: state.images.items,
});

const mapDispatchToProps = {
    getImages: imagesOperations.getImages,
};

export default connect(mapStateToProps, mapDispatchToProps)(ImagesSection);
