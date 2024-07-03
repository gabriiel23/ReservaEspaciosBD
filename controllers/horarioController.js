import firebase from '../firebase.js';
import Horario from '../models/horarioModel.js';
import { getFirestore, collection, doc, addDoc, getDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';

const db = getFirestore(firebase);

// CREATE
export const createHorario = async (req, res, next) => {
  try {
    const data = req.body;
    const horario = {
      dia_semana: data.dia_semana,
      hora_apertura: data.hora_apertura,
      hora_cierre: data.hora_cierre,
      id_espacio: doc(db, "espacio", data.id_espacio)
    };
    await addDoc(collection(db, 'horarios'), horario);
    res.status(200).send('Horario created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// GET
export const getHorarios = async (req, res, next) => {
  try {
    const horarios = await getDocs(collection(db, 'horarios'));
    const horarioArray = [];

    if (horarios.empty) {
      res.status(400).send('No Horarios found');
    } else {
      horarios.forEach((doc) => {
        const horario = new Horario(
          doc.id,
          doc.data().dia_semana,
          doc.data().hora_apertura,
          doc.data().hora_cierre,
          doc.data().id_espacio
        );
        horarioArray.push(horario);
      });

      res.status(200).send(horarioArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// GET FOR ID
export const getHorario = async (req, res, next) => {
  try {
    const id = req.params.id;
    const horario = doc(db, 'horarios', id);
    const data = await getDoc(horario);
    if (data.exists()) {
      res.status(200).send(data.data());
    } else {
      res.status(404).send('Horario not found');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// UPDATE
export const updateHorario = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const horario = doc(db, 'horarios', id);
    await updateDoc(horario, data);
    res.status(200).send('Horario updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// DELETE
export const deleteHorario = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'horarios', id));
    res.status(200).send('Horario deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
