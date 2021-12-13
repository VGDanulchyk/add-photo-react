import React, {useState} from 'react';
import { connect } from 'react-redux';
import imagesOperations from "../../../../redux/Images/imagesOperations";

import styles from "./ImageListItem.module.css"

const ImageListItem = ({ img, onRemove, id, fileName }) => {
    const [addStrikeLine, setStrikeLine] = useState(false)
    const onDeleteHandler = () => {
        setStrikeLine(true)
        setTimeout(() => {
            onRemove(id)
        }, 1500)

    }


    return (
        <li >
            <div className={styles.previewImage}>
                <div onClick={onDeleteHandler}
                     className={styles.previewRemove}
                >&times;
                </div>
                <img src={img} alt="Image" />
                    <h3 className={addStrikeLine ? 'strikeLine' : ''}>
                        {fileName}
                    </h3>
            </div>
        </li>
    );
};

const mapStateToProps = (state, ownProps) => {
    const item = state.images.items.find(item => item.id === ownProps.id);

    return {
        ...item,
    };
};

const mapDispatchToProps = {
    onRemove: imagesOperations.removeImage,
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageListItem);
