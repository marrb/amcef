import { collection } from "firebase/firestore";
import { firestore } from "./firebase";

export const todoColRef = collection(firestore, "todos");
