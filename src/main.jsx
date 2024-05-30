import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBkhGK9t1Xj1tSrbU1aMhcTjy35zwT7Scw",
  authDomain: "lanuevaespiga-ee440.firebaseapp.com",
  projectId: "lanuevaespiga-ee440",
  storageBucket: "lanuevaespiga-ee440.appspot.com",
  messagingSenderId: "1051519444170",
  appId: "1:1051519444170:web:44798e5cb38561d6f0c033"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
