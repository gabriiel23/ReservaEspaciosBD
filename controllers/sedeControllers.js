import firebase from '../firebase.js';
import Sede from '../models/sedeModel.js';

import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

const db = getFirestore(firebase);

export const createSede = async (req, res, next) => {
  try {
    const data = req.body;
    const sede = {
      ciudad: data.ciudad
    };
    await addDoc(collection(db, 'Sede'), sede);
    res.status(200).send('Sede created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getSedes = async (req, res, next) => {
  try {
    const sedes = await getDocs(collection(db, 'Sede'));
    const sedeArray = [];

    if (sedes.empty) {
      res.status(400).send('No Sedes found');
    } else {
      sedes.forEach((doc) => {
        const sede = new Sede(doc.id, doc.data().Ciudad);
        sedeArray.push(sede);
      });

      res.status(200).send(sedeArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getSede = async (req, res, next) => {
  try {
    const id = req.params.id;
    const sedeDoc = doc(db, 'Sede', id);
    const data = await getDoc(sedeDoc);
    if (data.exists()) {
      res.status(200).send(data.data());
    } else {
      res.status(404).send('Sede not found');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateSede = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const sedeDoc = doc(db, 'Sede', id);
    await updateDoc(sedeDoc, data);
    res.status(200).send('Sede updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteSede = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'Sede', id));
    res.status(200).send('Sede deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
