import firebase from "../firebase/firebase";

export function createEmailAccount({email, password, ...user}) {
  return async (dispatch) => {
    try {
      console.log("create email function", {email, password, ...user});
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log("after user");
      await firebase.firestore().collection("users").doc(email).set({email, ...user})
      dispatch(loggedIn(user, true));
    } catch (error) {
      console.log("sign up error ", error);
      dispatch(registerError(error.message));
    }
  };
}

export function loginEmailAccount(email, password) {
  return async (dispatch) => {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      const user = await firebase.firestore().collection("users").doc(email).get()
      dispatch(loggedIn(user.data()));
      console.log(user.data())
    } catch (error) {
        console.log(error)
      dispatch(loginError(error.message));
    }
  };
}

export function logout() {
  return async (dispatch) => {
    try {
      await firebase.auth().signOut();
      dispatch(loggedOut());
    } catch (error) {
      console.log(error);
    }
  };
}

function loggedIn(user, isNew=false) {
  console.log("user")
  return {
    type: "LOGGED_IN",
    payload: {
        user, 
        newUser: isNew
    },
  };
}
export function loggedOut(user) {
  return {
    type: "LOGGED_OUT",
  };
}

export function registerError(error) {
  return {
    type: "REGISTER_ERROR",
    payload: error,
  };
}

export function loginError(error) {
  return {
    type: "LOGIN_ERROR",
    payload: error,
  };
}

export function uploadBusiness(details, callback) {
  return async (dispatch) => {
    const db = firebase.firestore()
    db.collection("buiness").add(details).then(res => {
      console.log(res.id)
      dispatch({
        type: "UPLOAD_BUSINESS",
        payload: {...details, id: res.id}
      })
      return callback?.()
    })
    .catch(err => console.error(err))
  };
}


export function AddProduct(info){
  return{
    type:"Add_Product",
    payload: info
  }
}