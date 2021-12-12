import React from 'react';
import { connect } from 'react-redux';
import imagesOperations from "../../../../redux/Images/imagesOperations";

const ImageListItem = ({ text, img, onRemove }) => {
    return (
        <li /*className={styles.wrapper}*/>
            <div /*className={styles.btnWrapper}*/>
                <div /*className={styles.itemBtnContainer}*/>
                    <button /*className={styles.itemBtn}*/ type="button" onClick={onRemove}>
                        X
                    </button>
                </div>
            </div>

            <div>
                <div>
                    <div>
                        <img src={img} alt="Image" />
                    </div>
                    <div>
                        <p>{text}</p>
                    </div>
                </div>
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

const mapDispatchToProps = (dispatch, ownProps) => ({
    onRemove: () => dispatch(imagesOperations.removeImage(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageListItem);