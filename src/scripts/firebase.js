import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  getDocs,
  setDoc,
  doc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { asyncWrapper } from "./utils";

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

export const getAllWords = asyncWrapper(async function (language) {
  const snapshot = await getDocs(collection(db, language));
  const words = [];

  snapshot.forEach((word) =>
    words.push({
      id: word.id,
      ...word.data(),
    })
  );

  return words;
});

export const addNewWord = asyncWrapper(function (language, newWord) {
  setDoc(doc(db, language, newWord.id), newWord);
});

export const deleteWordById = asyncWrapper(async function (language, wordId) {
  await deleteDoc(doc(db, language, wordId));
});

export const delteAllWords = asyncWrapper(async function (language) {
  const allWords = await getAllWords(language);

  allWords.forEach(async (word) => {
    await deleteDoc(doc(db, language, word.id));
  });
});

export const updateWord = asyncWrapper(async function (
  language,
  wordId,
  updatedWord
) {
  const docRef = doc(db, language, wordId);

  await setDoc(docRef, updatedWord);

  return updatedWord;
});

export const getWordById = asyncWrapper(async function (language, wordId) {
  const docRef = doc(db, language, wordId);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) return null;

  return docSnap.data();
});

export const getFavoriteWords = asyncWrapper(async function (language) {
  const words = await getAllWords(language);

  return words.filter((word) => word.favorite === true);
});