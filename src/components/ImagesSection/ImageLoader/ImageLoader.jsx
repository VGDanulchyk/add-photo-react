import React from 'react';
import ReactFileReader from 'react-file-reader';
import imagesOperations from "../../../redux/Images/imagesOperations";
import { connect } from 'react-redux';

import styles from "./ImageLoader.module.css"


const ImageLoader = (props) => {
    const addImage = (data, name) => {
        props.onAddImage(data, name)
    }

    const onLoadFileHandler = (file) => {
        const {base64, fileList} = file;

        const fileName = fileList && fileList[0].name
        addImage(base64, fileName)
    }


    return (
        <div className={styles.container}>
            <ReactFileReader
                fileTypes={['.png', '.jpg', ',jpeg', '.gif']}
                base64={true}
                handleFiles={onLoadFileHandler}
            >
                <button className={styles.btn}>Upload an image</button>
            </ReactFileReader>
        </div>

    )
}

const mapDispatchToProps = {
    onAddImage: imagesOperations.addImage,
};

export default connect(null, mapDispatchToProps)(ImageLoader);
