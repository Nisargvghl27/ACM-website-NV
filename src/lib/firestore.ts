import { db } from "./firebase"; // Ensure you export 'db' in firebase.ts
import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";

export interface EventDetail {
  id?: string;
  title: string;
  date?: string;
  description?: string;
  images?: string[]; // Array of image URLs
}

export const addEvent = async (event: EventDetail) => {
  return await addDoc(collection(db, "events"), event);
};

export const getEvents = async (): Promise<EventDetail[]> => {
  const querySnapshot = await getDocs(collection(db, "events"));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as EventDetail));
};

export const getEventById = async (id: string): Promise<EventDetail | null> => {
  const docRef = doc(db, "events", id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? (docSnap.data() as EventDetail) : null;
};