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
