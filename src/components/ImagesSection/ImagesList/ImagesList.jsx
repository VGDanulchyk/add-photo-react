import React from 'react';
import { connect } from 'react-redux';
import ImageListItem from './ImageListItem/ImageListItem';


const ImageList = ({ images }) => (
    <div>
        <ul>
            {images.map(({ id }) => (
                <ImageListItem key={id} id={id} />
            ))}
        </ul>
    </div>
);

const mapStateToProps = state => ({
    images: state.images.items,
});

export default connect(mapStateToProps)(ImageList);