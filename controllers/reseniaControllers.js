import firebase from '../firebase.js';
import Resenia from '../models/reseniaModel.js';

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

export const createResenia = async (req, res, next) => {
  try {
    const data = req.body;
    await addDoc(collection(db, 'Resenia'), data);
    res.status(200).send('Resenia created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getResenias = async (req, res, next) => {
  try {
    const resenias = await getDocs(collection(db, 'Resenia'));
    const reseniaArray = [];

    if (resenias.empty) {
      res.status(400).send('No Resenias found');
    } else {
      resenias.forEach((doc) => {
        const resenia = new Resenia(
          doc.id,
          doc.data().comentario,
          doc.data().fecha_resenia,
          doc.data().Usuario_id_usuario,
          doc.data().id_espacio
        );
        reseniaArray.push(resenia);
      });

      res.status(200).send(reseniaArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getResenia = async (req, res, next) => {
  try {
    const id = req.params.id;
    const reseniaDoc = doc(db, 'Resenia', id);
    const data = await getDoc(reseniaDoc);
    if (data.exists()) {
      res.status(200).send(data.data());
    } else {
      res.status(404).send('Resenia not found');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateResenia = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const reseniaDoc = doc(db, 'Resenia', id);
    await updateDoc(reseniaDoc, data);
    res.status(200).send('Resenia updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteResenia = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'Resenia', id));
    res.status(200).send('Resenia deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
