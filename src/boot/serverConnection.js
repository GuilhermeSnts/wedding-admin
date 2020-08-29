import Firebase from "firebase/app";
import "firebase/firestore"; // eslint-disable-line

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

export default ({ Vue }) => {
  // Initialize Firebase from settings
  Firebase.initializeApp(config);
  Vue.prototype.$firebase = Firebase;
};