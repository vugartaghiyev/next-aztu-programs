import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { firebaseConfig } from "./config";

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export { app, db };
