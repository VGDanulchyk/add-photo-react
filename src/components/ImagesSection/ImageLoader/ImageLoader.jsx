import React, { Component } from 'react';
import imagesOperations from "../../../redux/Images/imagesOperations";
import { connect } from 'react-redux';
// import styles from './TrekEditor.module.scss';
// import stylesBtn from '../Button/Button.module.scss';


class ImageLoader extends Component {
    state = {
        image: null
    };

    onFileChange = event => {
        this.setState({image:event.target.files[0]});
    };

    // const reader = new FileReader();
    //
    // reader.readAsDataURL(this.files[0]);


    // handleSubmit = submit => {
    //     submit.preventDefault();
    //     const { image } = this.state;
    //
    //     this.props.onAddImage({ title, text });
    //     this.setState({ title: '', text: '' });
    // };

    render() {
        return (
            <input
              // className={styles.inputStyles}
              type="file"
              onChange={this.files}

            />
        );
    }
}

const mapDispatchToProps = {
    onAddImage: imagesOperations.addImage,
};

export default connect(null, mapDispatchToProps)(ImageLoader);