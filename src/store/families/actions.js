import firebase from "firebase";
import "firebase/firestore";

export function GET_FAMILIES(context) {
  firebase
    .firestore()
    .collection("families")
    .get()
    .then(querySnapshot => {
      const families = querySnapshot.docs.map(doc => doc.data());
      context.commit("SET_FAMILIES", families);
    });
}

export function CREATE_FAMILY(context, payload) {
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection("families")
      .doc()
      .set(payload)
      .then(() => {
        resolve();
      })
      .catch(err => reject(err));
  });
}

export function WATCH_CHANGES(context) {
  firebase
    .firestore()
    .collection("families")
    .onSnapshot(querySnapshot => {
      const families = querySnapshot.docs.map(doc => doc.data());
      context.commit("SET_FAMILIES", families);
    });
}
