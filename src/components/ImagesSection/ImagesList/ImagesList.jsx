import React from 'react';
import { connect } from 'react-redux';
import ImageListItem from './ImageListItem/ImageListItem';

import styles from "./ImageList.module.css"


const ImageList = ({ images }) => (
    <div className={styles.container}>
        <ul className={styles.preview}>
            {images.map(({ id, img, fileName }) => (

                <ImageListItem key={id} id={id} img={img} fileName={fileName}/>
            ))}
        </ul>
    </div>
);


const mapStateToProps = state => ({
    images: state.images.items,
});


export default connect(mapStateToProps)(ImageList);
