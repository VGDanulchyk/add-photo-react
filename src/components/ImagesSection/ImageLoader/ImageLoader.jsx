import React from 'react';
import ReactFileReader from 'react-file-reader';
import imagesOperations from "../../../redux/Images/imagesOperations";
import { connect } from 'react-redux';
import axios from "axios";

const ImageLoader = (props) => {
    const addImage = (data) => {
        props.onAddImage(data)
    }

    const onLoadFileHandler = (files) => {
        addImage(files.base64)
    }


    return (
        <ReactFileReader fileTypes={[".JPG",".PNG"]} base64={true} handleFiles={onLoadFileHandler}>
            <button className='btn'>Upload</button>
        </ReactFileReader>
    )
}

const mapDispatchToProps = {
    onAddImage: imagesOperations.addImage,
};

export default connect(null, mapDispatchToProps)(ImageLoader);
