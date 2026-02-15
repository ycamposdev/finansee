import { auth, db } from "./firebase";
import { getDoc, doc } from "firebase/firestore";

export const obtenerDatosUsuario = async () => {
  try {
    const user = auth.currentUser;
    const obtenerRuta = doc(db, "users", user.uid);
    const obtenerDatos = await getDoc(obtenerRuta);
    return obtenerDatos.data();
  } catch (error) {
    console.log("error en: ", error);
  }
};
