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
