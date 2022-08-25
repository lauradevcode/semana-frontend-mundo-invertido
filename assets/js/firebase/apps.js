
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCHYSK-NZUQofZv2oqx127ZmcESFobYBdE",
    authDomain: "frontend-mundo-invertido.firebaseapp.com",
    projectId: "frontend-mundo-invertido",
    storageBucket: "frontend-mundo-invertido.appspot.com",
    messagingSenderId: "857642696122",
    appId: "1:857642696122:web:88a2a709c79b16f42e7183"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default app;