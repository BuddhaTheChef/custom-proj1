import React, { Component } from "react";
import { Image, Segment, Header, Grid, Button, Icon } from "semantic-ui-react";
import Dropzone from "react-dropzone";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import firebase from 'firebase'

class ProfileImages extends Component {
  state = {
    files: [],
    fileName: "",
    cropResult: null,
    image: {},
    photoUrl: ''
  };

  cropImage = () => {
    if (typeof this.refs.cropper.getCroppedCanvas() === "undefined") {
      return;
    }
    this.refs.cropper.getCroppedCanvas().toBlob(blob => {
      let imageUrl = URL.createObjectURL(blob);
      this.setState({
        cropResult: imageUrl,
        image: blob
      });
    }, "image/jpeg");
  };

  onDrop = files => {
    this.setState({
      files,
      fileName: files[0].name
    });
  };

  uploadPhoto = () => {
      var user = firebase.auth().currentUser;
    if(user!= null) {
      user.updateProfile({
        photoURL: this.state.cropResult
      }).then(()=> {console.log(this.state.files[0].preview, user)})
    }
  };

  render() {
    var user = firebase.auth().currentUser;
    console.log(user)
    const { auth } = this.props
    console.log(this.state.image)
    console.log(auth)
    console.log(this.state.files[0]);
    console.log(this.state.cropResult)
      console.log(this.state.photoUrl)
    return (
      <Segment style={{backgroundColor: 'rgb(66,66,66)'}}>
        <Header dividing size="large" content="Your Photos" />
        <Grid className="edit-image-container-div">
          <Grid.Row />
          <Grid.Column width={4}>
            <Header style={{fontSize: '24px', marginBottom: '46px'}} color="teal" sub content="Step 1 - Add Photo" />
            <Dropzone onDrop={this.onDrop} multiple={false}>
              <div style={{ backgroundColor: 'whitesmoke', paddingTop: "30px", textAlign: "center", height: 'inherit', margin: '1px'}}>
                <Icon name="upload" size="huge" />
                <Header content="Drop Image Here or Click to Add" />
              </div>
            </Dropzone>
          </Grid.Column>
          <Grid.Column width={1} />
          <Grid.Column width={4}>
            <Header style={{fontSize: '24px', marginBottom: '46px'}} sub color="teal" content="Step 2 - Resize image" />
            {this.state.files[0] && (
              <Cropper
                style={{ height: "200px", width: "200px",boxShadow: '0px 7px 34px 4px rgba(0,0,0, 0.43)', marginLeft: '30px' }}
                ref="cropper"
                src={this.state.files[0].preview}
                aspectRatio={1}
                viewMode={0}
                dragMode="move"
                guides={false}
                scalable={true}
                cropBoxMovable={true}
                cropBoxResizable={true}
                crop={this.cropImage}
              />
            )}
          </Grid.Column>
          <Grid.Column width={1} />
          <Grid.Column width={4}>
            <Header style={{fontSize: '24px', marginBottom: '46px'}} sub color="teal" content="Step 3 - Preview and Upload" />
            {this.state.files[0] && (
              <Image
                style={{ height: "200px", width: "200px",boxShadow: '0px 7px 34px 4px rgba(0,0,0, 0.43)', marginLeft: '89px' }}
                src={this.state.cropResult}
              />
            )}
            <Button className="edit-pic-upload-button" onClick={this.uploadPhoto}>Upload</Button>
          </Grid.Column>
        </Grid>

      </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  }
}

export default withRouter(connect(mapStateToProps)(ProfileImages));
