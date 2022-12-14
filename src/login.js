// import React from "react";
// import { useDispatch } from 'react-redux';
// import { auth, provider } from './firebase';
// import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// export default function Login() {
//   const dispatch = useDispatch();
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       // The signed-in user info.
//       const user = result.user;
//       console.log("user signed in is:", user)
//       dispatch(
//         login({
//           email: user.email,
//           uid: user.uid,
//           displayName: user.displayName,
//         })
//       );
//     })
//     .catch((error) => {
//       const errorMessage = error.message;
//       console.log("error message is:", errorMessage)
//     });
// }