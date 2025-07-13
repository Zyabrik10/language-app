import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5aDGFwVaziMI2WOVx_SuJr2yg7ojnKCk",
  authDomain: "language-d157c.firebaseapp.com",
  projectId: "language-d157c",
  storageBucket: "language-d157c.firebasestorage.app",
  messagingSenderId: "135792918299",
  appId: "1:135792918299:web:3c70fe51b0a79645c05dbe",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getAllWords(language) {
  const words = [];
  try {
    const snapshot = await getDocs(collection(db, language));

    snapshot.forEach((word) =>
      words.push({
        id: word.id,
        ...word.data(),
      })
    );
  } catch (e) {
    console.error(e);
  }

  return words;
}

export async function addNewWord(
  language,
  { id, expression, translation, description, type_expression, type }
) {
  try {
    await setDoc(doc(db, language, id), {
      id,
      expression,
      translation,
      description,
      type_expression,
      type,
    });
  } catch (e) {
    console.error(e);
  }
}
