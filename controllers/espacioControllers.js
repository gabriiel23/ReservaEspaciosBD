import firebase from '../firebase.js';
import categoria from '../models/categoriaModel.js';
import Espacio from '../models/espacioModel.js';

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

export const createEspacio = async (req, res, next) => {
  try {
    const data = req.body;
    const espacio = {
      nombre_espacio: data.nombre_espacio,
      capacidad: data.capacidad,
      ubicacion: data.ubicacion,
      descripción: data.descripción,
      idSede: doc(db, "sede", data.idSede),
      tipo_espacio: doc(db, "Sede", data.idCategoria)
    };
    await addDoc(collection(db, 'Espacio'), espacio);
    res.status(200).send('Espacio created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getEspacios = async (req, res, next) => {
  try {
    const espacios = await getDocs(collection(db, 'Espacio'));
    const espacioArray = [];

    if (espacios.empty) {
      res.status(400).send('No Espacios found');
    } else {
      espacios.forEach((doc) => {
        const espacio = new Espacio(
          doc.id,
          doc.data().nombre_espacio,
          doc.data().capacidad,
          doc.data().ubicacion,
          doc.data().descripcion,
          doc.data().idSede,
          doc.data().tipo_espacio
        );
        espacioArray.push(espacio);
      });

      res.status(200).send(espacioArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getEspacio = async (req, res, next) => {
  try {
    const id = req.params.id;
    const espacioDoc = doc(db, 'Espacio', id);
    const data = await getDoc(espacioDoc);
    if (data.exists()) {
      res.status(200).send(data.data());
    } else {
      res.status(404).send('Espacio not found');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateEspacio = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const espacioDoc = doc(db, 'Espacio', id);
    await updateDoc(espacioDoc, data);
    res.status(200).send('Espacio updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteEspacio = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'Espacio', id));
    res.status(200).send('Espacio deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
