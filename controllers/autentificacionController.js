import firebase from '../firebase.js';
import Autentificacion from '../models/autentificacionModel.js';
import { getFirestore, collection, doc, addDoc, getDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';

const db = getFirestore(firebase);

// CREATE
export const createAutentificacion = async (req, res, next) => {
  try {
    const data = req.body;
    const autentificacion = {
      correo: data.correo,
      contraseña: data.contraseña,
      id_usuario: doc(db, "usuario", data.id_usuario)
    };
    await addDoc(collection(db, 'autentificaciones'), autentificacion);
    res.status(200).send('Autentificacion created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// GET
export const getAutentificaciones = async (req, res, next) => {
  try {
    const autentificaciones = await getDocs(collection(db, 'autentificaciones'));
    const autentificacionArray = [];

    if (autentificaciones.empty) {
      res.status(400).send('No Autentificaciones found');
    } else {
      autentificaciones.forEach((doc) => {
        const autentificacion = new Autentificacion(
          doc.id,
          doc.data().correo,
          doc.data().contraseña,
          doc.data().id_usuario
        );
        autentificacionArray.push(autentificacion);
      });

      res.status(200).send(autentificacionArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// GET FOR ID
export const getAutentificacion = async (req, res, next) => {
  try {
    const id = req.params.id;
    const autentificacion = doc(db, 'autentificaciones', id);
    const data = await getDoc(autentificacion);
    if (data.exists()) {
      res.status(200).send(data.data());
    } else {
      res.status(404).send('Autentificacion not found');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// UPDATE
export const updateAutentificacion = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const autentificacion = doc(db, 'autentificaciones', id);
    await updateDoc(autentificacion, data);
    res.status(200).send('Autentificacion updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// DELETE
export const deleteAutentificacion = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'autentificaciones', id));
    res.status(200).send('Autentificacion deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
