import React, { Component } from "react";
import { Image, Segment, Header, Divider, Grid, Button, Card, Icon } from "semantic-ui-react";
import Dropzone from "react-dropzone";
import defaultPic from "../../assets/default-user-icon.jpg";
// import Cropper from "react-cropper";
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
        photoURL: this.state.files[0].preview
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
      <Segment>
        <Header dividing size="large" content="Your Photos" />
        <Grid>
          <Grid.Row />
          <Grid.Column width={4}>
            <Header color="teal" sub content="Step 1 - Add Photo" />
            <Dropzone onDrop={this.onDrop} multiple={false}>
              <div style={{ paddingTop: "30px", textAlign: "center" }}>
                <Icon name="upload" size="huge" />
                <Header content="Drop Image Here or Click to Add" />
              </div>
            </Dropzone>
          </Grid.Column>
          <Grid.Column width={1} />
          <Grid.Column width={4}>
            <Header sub color="teal" content="Step 2 - Resize image" />
            {this.state.files[0] && (
              <div>
              <Image style={{ height: "200px", width: "100%" }} src={this.state.files[0].preview} />
              </div>
              // <Cropper
              //   style={{ height: "200px", width: "100%" }}
              //   ref="cropper"
              //   src={this.state.files[0].preview}
              //   aspectRatio={1}
              //   viewMode={0}
              //   dragMode="move"
              //   guides={false}
              //   scalable={true}
              //   cropBoxMovable={true}
              //   cropBoxResizable={true}
              //   crop={this.cropImage}
              // />
            )}
          </Grid.Column>
          <Grid.Column width={1} />
          <Grid.Column width={4}>
            <Header sub color="teal" content="Step 3 - Preview and Upload" />
            {this.state.files[0] && (
              <Image
                style={{ minHeight: "200px", minWidth: "200px" }}
                src={this.state.cropResult}
              />
            )}
            <Button onClick={this.uploadPhoto}>Upload</Button>
          </Grid.Column>
        </Grid>

        <Divider />
        <Header sub color="teal" content="All Photos" />

        <Card.Group itemsPerRow={5}>
          <Card>
            <Image src={defaultPic} />
            <Button positive>Main Photo</Button>
          </Card>
          <Card>
            <Image src={defaultPic} />
            <div className="ui two buttons">
              <Button basic color="green">
                Main
              </Button>
              <Button basic icon="trash" color="red" />
            </div>
          </Card>
          {this.state.files[0] && (
            <Image
              style={{ minHeight: "200px", minWidth: "200px" }}
              src={this.props.auth.photoURL}
            />
          )}
        </Card.Group>
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
