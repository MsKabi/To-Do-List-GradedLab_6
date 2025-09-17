import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/config';

const tasksCollection = collection(db, 'tasks');

export const addTask = async (task) => {
  await addDoc(tasksCollection, { text: task });
};

export const getTasks = async () => {
  const snapshot = await getDocs(tasksCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const deleteTask = async (id) => {
  await deleteDoc(doc(db, 'tasks', id));
};
