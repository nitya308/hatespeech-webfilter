# Hatespeech WebFilter Web App
**Author:** Nitya Agarwala  
**Created:** 12 November 2022 <br/>
**Description:** client and backend server for WebSafe App <br/>

This is the web app for the partner **WebSafe** chrome extension: [here](https://github.com/nitya308/hatespeech-filter-chrome-extn) <br/><br/>
The internet can be an unsafe place for many with the amount of content out there. While some sites have thier own measures to counteract hate speech, there is no ne solution that makes the entire web safe, custom to the user's needs. <br/> <br/>
That's where this app comes in. It allows the user to add a custom set of trigger words. These words will then be blurred out on all website the user visits and the user can choose to reveal them if they want. <br/> <br/>
The app uses **Firebase** to authenticate and store users along with their word preferences. The web app allows users to enter custom words, and toggles showing or hiding a list of the user's banned words. **React** and **Redux** actions are used to update the state and store the user information across the app. The data is sent to the Firebase database using the **Node.js** backend.


## Basic Details:
**Languages & Tools:** JavaScript, React.js, Redux, ExpressJS, NodeJS, Cloud Firestore


## Installation:

**Running this project locally** requires NodeJS and yarn/npm. To install the required packages, run the following command

```yarn install```

OR

```npm install```

## Structure:
Below is the basic structure of the frontend and backend. All calendar functionality is in lib.js in the backend.
```
 --src
    | -- actionTypes
    |   |-- actionTypes.js
    | -- actions
    |   |-- actions.js
    | -- components
    |   |-- About.js
    |   |-- HiddenWords.js
    |   |-- WordList.js
    | -- reducers
    |   |-- userReducer.js
    | -- App.js
    | -- App.css
    | -- index.js
    | -- index.css
    | -- firebase.js
 -- server
    |-- index.js
    |-- package-lock.json
    |-- package.json
-- package.json
```
## User Redux Reducer: <br/>
The UserReducer updates the state of the user throughout the app and for the web extension. The user is intially stored as:
```
const initialState = {
  userID: null,
  userName: null,
  words: [],
};
```
The `LOGIN_USER` action calls the Firebase auth function `await signInWithPopup(auth, provider)` to get the uid, access token and email for the user from Google OAuth 2.0 services. A document is then created to store the user information along with the list of words using the firebase `setDoc` function. (see firebase.js for details). <br/><br/>

The `ADD_WORD` action updates the users list of trigger words with an addition to the array by calling the `addWordToUser` function from `firebase.js`. This uses `arrayUnion` method of firestore cloud.

## API Backend Get Words Route: <br/>
The API is built for the chrome extension to interact with. The main need of the chrome extension is to fetch the user's list of trigger words to hide. This is achieved through the following route:
```
app.get("/api/words", (req, res) => {
  const userID = req.query.userID;
  (async () => {
    try {
      const document = db.collection('users').doc(userID);
      let userDoc = await document.get();
      let response = userDoc.data().words;
      return res.status(200).send(response);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});
```
The route accesses the `users` colelction from the Firestore database and calls the `document.get` function to fetch the words array data.

## Future Features
* Working on python ML models for more accurate and optimized hate speech detection to add to the app. I am taking a Neural Networks class this semester and excited to apply my learnings to this.
