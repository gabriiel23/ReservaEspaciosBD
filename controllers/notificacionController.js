import firebase from '../firebase.js';
import Notificacion from '../models/notificacionModel.js';
import { getFirestore, collection, doc, addDoc, getDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';

const db = getFirestore(firebase);

// CREATE
export const createNotificacion = async (req, res, next) => {
  try {
    const data = req.body;
    const notificacion = {
      asunto: data.asunto,
      cuerpo: data.cuerpo,
      fecha_envio: data.fecha_envio,
      id_usuario: doc(db, "usuario", data.id_usuario),
      id_reserva: doc(db, "reserva", data.id_reserva),
      id_espacio: doc(db, "espacio", data.id_espacio)
    };
    await addDoc(collection(db, 'notificaciones'), notificacion);
    res.status(200).send('Notificacion created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// GET
export const getNotificaciones = async (req, res, next) => {
  try {
    const notificaciones = await getDocs(collection(db, 'notificaciones'));
    const notificacionArray = [];

    if (notificaciones.empty) {
      res.status(400).send('No Notificaciones found');
    } else {
      notificaciones.forEach((doc) => {
        const notificacion = new Notificacion(
          doc.id,
          doc.data().asunto,
          doc.data().cuerpo,
          doc.data().fecha_envio,
          doc.data().id_usuario,
          doc.data().id_reserva,
          doc.data().id_espacio
        );
        notificacionArray.push(notificacion);
      });

      res.status(200).send(notificacionArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// GET FOR ID
export const getNotificacion = async (req, res, next) => {
  try {
    const id = req.params.id;
    const notificacion = doc(db, 'notificaciones', id);
    const data = await getDoc(notificacion);
    if (data.exists()) {
      res.status(200).send(data.data());
    } else {
      res.status(404).send('Notificacion not found');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// UPDATE
export const updateNotificacion = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const notificacion = doc(db, 'notificaciones', id);
    await updateDoc(notificacion, data);
    res.status(200).send('Notificacion updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// DELETE
export const deleteNotificacion = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'notificaciones', id));
    res.status(200).send('Notificacion deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
