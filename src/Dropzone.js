import React, { Component } from 'react';

import Dropzone from 'react-dropzone';

const imageMaxSize = 1000000000; // bytes
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif';
const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => { return item.trim() });

//background control for fileUpload box
const bgColor = {
  backgroundColor: 'rgb(218, 230, 233)'
}

const removeBg = {
  background: '#fff'
}


class ImgDrop extends Component {

  verifyFile = (files) => {
    if (files && files.length > 0) {
      const currentFile = files[0];
      const currentFileType = currentFile.type;
      const currentFileSize = currentFile.size;

      if (currentFileSize > imageMaxSize) {
        alert("This file is not allowed. " + currentFileSize + " bytes is too large")
        return false;
      }
      if (!acceptedFileTypesArray.includes(currentFileType)) {
        alert("This file is not allowed. Only images are allowed.")
        return false;
      }
      return true;
    }
  }

  handleOnDrop = (files, rejectedFiles) => {
    console.log('inside onDrop method');
    if (rejectedFiles && rejectedFiles.length > 0) {
      console.log('this is rejected files', rejectedFiles);
      this.verifyFile(rejectedFiles);
    }

    if (files && files.length > 0) {
      const isVerified = this.verifyFile(files);

      if (isVerified) {
        // imageBase64Data 
        const currentFile = files[0];
        const myFileItemReader = new FileReader();
        myFileItemReader.addEventListener("load", () => {
          // console.log(myFileItemReader.result)
          const myResult = myFileItemReader.result;
          // this.setState(prevState => ({
          //   imgSrc: [...prevState.imgSrc, myResult]
          // }))
          this.props.handleImages(myResult);
        }, false)

        myFileItemReader.readAsDataURL(currentFile);
      }
    }
  }


  handleFileSelect = event => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const isVerified = this.verifyFile(files);

      if (isVerified) {
        // imageBase64Data 
        const currentFile = files[0];
        const myFileItemReader = new FileReader();
        myFileItemReader.addEventListener("load", () => {
          // console.log(myFileItemReader.result);
          const myResult = myFileItemReader.result;
          // this.setState(prevState => ({
          //   imgSrc: [...prevState.imgSrc, myResult]
          // }))
          this.props.handleImages(myResult);
        }, false)

        myFileItemReader.readAsDataURL(currentFile);
      }
    }
  }

  render() {
    const {imgSrc} = this.props;

    return (
      <div className="dropzone-container" style={imgSrc.slice(1).length === 0 ? bgColor : removeBg}>
        <div className="uploaded">
          {
            imgSrc.slice(1).length ? imgSrc.slice(1).map(image =>
              <img className="selected-image" src={image} alt="" />
            ) : null
          }

          <Dropzone onDrop={this.handleOnDrop} accept={acceptedFileTypes} multiple={true} maxSize={imageMaxSize}>
            {dropzoneProps => {
              return (
                <div className={imgSrc.slice(1).length <8 ? "image-upload" : "hide"} >
                  <div className={imgSrc.slice(1).length  ? "alt-input-container" : "file-input-container"}>
                    <label
                      htmlFor="file-upload"
                      className={imgSrc.slice(1).length ? "upload-btn plus" : "add-more-text plus"}>
                      +
                        <input
                        id="file-upload"
                        type='file'
                        accept={acceptedFileTypes}
                        multiple={true}
                        onChange={this.handleFileSelect} />
                    </label>
                    <p className={imgSrc.slice(1).length ? "hide" : "add-more-text"}>Add More Photos</p>
                    <p className={imgSrc.slice(1).length ? "hide" : "drag-text"}>drag files here</p>
                  </div>

                </div>
              );
            }}
          </Dropzone>
        </div>

      </div>
    )
  }
}

export default ImgDrop;