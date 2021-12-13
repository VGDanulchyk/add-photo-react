import React from 'react';
import { connect } from 'react-redux';
import ImageListItem from './ImageListItem/ImageListItem';


const ImageList = ({ images }) => (
    <div>
        <ul>
            {images.map(({ id, img }) => (

                <ImageListItem key={id} img={img} />
            ))}
        </ul>
    </div>
);


const mapStateToProps = state => ({
    images: state.images.items,
});


export default connect(mapStateToProps)(ImageList);
