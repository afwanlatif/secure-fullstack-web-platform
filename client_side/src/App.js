import logo from "./logo.svg";
import "./App.css";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInAnonymously,
} from "firebase/auth";
import { useState } from "react";

function App() {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Initialize Firebase with environment variables
  // Ensure you have set these variables in your .env file
  // and that they are prefixed with REACT_APP_ for Create React App to recognize them
  // Example: REACT_APP_API_KEY, REACT_APP_AUTH_DOMAIN, etc.
  // Make sure to restart your development server after adding or changing environment variables

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  };

  const app = initializeApp(firebaseConfig);

  const signIn = () => {
    console.log('Sign in clicked');
    console.log('Firebase config:', firebaseConfig);

    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    const auth = getAuth(app);

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const token = user.accessToken;
        console.log("Token: ", token);
        setToken(token);
      })
      .catch((error) => {
        console.error('Sign in error:', error.code, error.message);
      });
  };

  const emailLogin = () => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        const token = user.accessToken;

        console.log("Token: ", token);
        setToken(token);
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const anonymousSignIn = () => {
    const auth = getAuth(app);
    signInAnonymously(auth)
      .then((result) => {
        // Signed in
        const user = result.user;
        const token = user.accessToken;

        console.log("Token: ", token);
        setToken(token);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const copyToken = () => {
    navigator.clipboard.writeText(token);
  };
  return (
    <div className="App">
      <hr className="flexOne" />
      <button style={{ marginBottom: '10px' }} onClick={signIn}>Google Sign In</button>
      <textarea
        style={{ width: "80%", height: "100px" }}
        value={token}
        disabled
      ></textarea>
      <button style={{ marginTop: '10px' }} onClick={copyToken} disabled={!token}>Copy Token</button>
      <hr className="flexOne" />
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button style={{ marginTop: '10px' }} onClick={() => emailLogin()}>Email Sign In</button>
      <hr className="flexOne" />
      <button onClick={() => anonymousSignIn()}>Anonymous Sign In</button>
    </div>
  );
}

export default App;
