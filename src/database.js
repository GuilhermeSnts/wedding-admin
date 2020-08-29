import firebase from "firebase/app";
import "firebase/firestore";

export const db = firebase
  .initializeApp({ projectId: process.env.PROJECT_ID })
  .firestore();
