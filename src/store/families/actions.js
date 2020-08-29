import { db } from "../../database";
export function GET_FAMILIES(context) {
  db.collection("families")
    .get()
    .then(querySnapshot => {
      const families = querySnapshot.docs.map(doc => doc.data());
      context.commit("SET_FAMILIES", families);
    });
}
