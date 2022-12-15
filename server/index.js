const express = require("express");
require('dotenv').config()

var admin = require("firebase-admin");

var serviceAccount = require("./permissions.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

// add route to get the words that need to be replaced for particular user
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

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});
