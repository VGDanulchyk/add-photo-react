import React, { Component } from 'react';
import imagesOperations from "../../../redux/Images/imagesOperations";
import { connect } from 'react-redux';
// import stylesBtn from '../Button/Button.module.scss';


class ImageLoader extends Component {
    state = {
        image: ''
    };


    onFileUpload = () => {

        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        // Details of the uploaded file
        console.log(this.state.selectedFile);

        // Request made to the backend api
        // Send formData object
        axios.post("api/uploadfile", formData);
    };

    // onFileChange = event => {
    //     this.setState({image:event.target.files[0]});
    // };

    imageLoad = () => {
        const reader = new FileReader();

        reader.readAsDataURL(this.files);

        console.log(reader.result)
    }



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
              onChange={this.imageLoad}

            />
        );
    }
}

const mapDispatchToProps = {
    onAddImage: imagesOperations.addImage,
};

export default connect(null, mapDispatchToProps)(ImageLoader);