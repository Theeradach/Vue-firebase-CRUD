import Firebase from 'firebase'
let config = {
    apiKey: "AIzaSyBDWBlwm5jqypty8VbtFC-CWM2W0q1tgaE",
    authDomain: "vue-project-6fb88.firebaseapp.com",
    databaseURL: "https://vue-project-6fb88.firebaseio.com",
    projectId: "vue-project-6fb88",
    storageBucket: "vue-project-6fb88.appspot.com",
    messagingSenderId: "220624440871"
  };
let app = Firebase.initializeApp(config)
export const db = app.database()

