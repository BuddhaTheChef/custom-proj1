export const createProject = (project) => {
  return ( dispatch, getState, {getFirebase, getFirestore}) => {
    //make async call to  db
    const firestore = getFirestore();
    const user = getState().firebase.auth.displayName;
    const userId = getState().firebase.auth.uid;
    firestore.collection('projects').add({
      ...project,
      authorName: user,
      authorId: userId,
      createdAt: new Date()
    }).then(() => {
      dispatch({type: 'CREATE_PROJECT', project: project})
    }).catch((err) => {
      dispatch({type: 'CREATE_PROJECT_ERROR', err})
    })
  }
}

export const uploadProfileImage = (file, fileName) =>
  async (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const user = firebase.auth().currentUser;
    const path = `${user.uid}/user_images`;
    const options = {
      name: fileName
    }
    try {

    //upload the file to firebase storage
    let uploadedFile = await firebase.uploadFile(path, file, null, options);
    //get url of image
    let downloadURL = await uploadedFile.uploadTaskSnapshot.downloadURL;
    //get user doc
    let userDoc = await firestore.get(`users/${user.uid}`);
    //check if user has photo if not update profile with new image
    if(!userDoc.data().photoURL) {
      await firebase.updateProfile({
        photoURL: downloadURL
      });
      await user.updateProfile({
        photoURL: downloadURL
      });
    }
    //add new photo to collection
    await firestore.add({
      collection: 'users',
      doc: user.uid,
      subcollections: [{collection: 'photos'}]
    }, {
      name: fileName,
      url: downloadURL
    })

    }
    catch(error) {
      console.log(error);
      throw new Error('Problem uploading photo')
    }
  }
