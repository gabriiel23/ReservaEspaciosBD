import firebase from '../firebase.js';
import Reserva from '../models/reservaModel.js';

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

export const createReserva = async (req, res, next) => {
  try {
    const data = req.body;
    await addDoc(collection(db, 'Reserva'), data);
    res.status(200).send('Reserva created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getReservas = async (req, res, next) => {
  try {
    const reservas = await getDocs(collection(db, 'Reserva'));
    const reservaArray = [];

    if (reservas.empty) {
      res.status(400).send('No Reservas found');
    } else {
      reservas.forEach((doc) => {
        const reserva = new Reserva(
          doc.id,
          doc.data().fecha_reserva,
          doc.data().hora_inicio,
          doc.data().hora_fin,
          doc.data().estado_reserva,
          doc.data().motivo_reserva,
          doc.data().id_usuario,
          doc.data().id_espacio
        );
        reservaArray.push(reserva);
      });

      res.status(200).send(reservaArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getReserva = async (req, res, next) => {
  try {
    const id = req.params.id;
    const reservaDoc = doc(db, 'Reserva', id);
    const data = await getDoc(reservaDoc);
    if (data.exists()) {
      res.status(200).send(data.data());
    } else {
      res.status(404).send('Reserva not found');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateReserva = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const reservaDoc = doc(db, 'Reserva', id);
    await updateDoc(reservaDoc, data);
    res.status(200).send('Reserva updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteReserva = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'Reserva', id));
    res.status(200).send('Reserva deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
