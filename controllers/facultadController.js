import firebase from '../firebase.js';
import Facultad from '../models/facultadModel.js';
import { getFirestore, collection, doc, addDoc, getDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';

const db = getFirestore(firebase);

// CREATE
export const createFacultad = async (req, res, next) => {
  try {
    const data = req.body;
    await addDoc(collection(db, 'facultades'), data);
    res.status(200).send('Facultad created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// GET
export const getFacultades = async (req, res, next) => {
  try {
    const facultades = await getDocs(collection(db, 'facultades'));
    const facultadArray = [];

    if (facultades.empty) {
      res.status(400).send('No Facultades found');
    } else {
      facultades.forEach((doc) => {
        const facultad = new Facultad(
          doc.id,
          doc.data().nombre,
          doc.data().descripcion,
          doc.data().idSede
        );
        facultadArray.push(facultad);
      });

      res.status(200).send(facultadArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// GET FOR ID
export const getFacultad = async (req, res, next) => {
  try {
    const id = req.params.id;
    const facultad = doc(db, 'facultades', id);
    const data = await getDoc(facultad);
    if (data.exists()) {
      res.status(200).send(data.data());
    } else {
      res.status(404).send('Facultad not found');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// UPDATE
export const updateFacultad = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const facultad = doc(db, 'facultades', id);
    await updateDoc(facultad, data);
    res.status(200).send('Facultad updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// DELETE
export const deleteFacultad = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'facultades', id));
    res.status(200).send('Facultad deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
