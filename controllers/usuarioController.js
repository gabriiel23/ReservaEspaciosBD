import firebase from '../firebase.js';
import Usuario from '../models/usuarioModel.js';
import { getFirestore, collection, doc, addDoc, getDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';

const db = getFirestore(firebase);

// CREATE
export const createUsuario = async (req, res, next) => {
  try {
    const data = req.body;
    const usuario = {
      nombres: data.nombres,
      apellido: data.apellido,
      correo_electronico: data.correo_electronico,
      telefono: data.telefono,
      idSede: doc(db, "sede", data.idSede),
      idFacultad: doc(db, "facultad", data.idFacultad),
      id_tipo_usuario: doc(db, "tipoUsuario", data.idCategoria)
    };
    await addDoc(collection(db, 'usuarios'), usuario);
    res.status(200).send('Usuario created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// GET
export const getUsuarios = async (req, res, next) => {
  try {
    const usuarios = await getDocs(collection(db, 'usuarios'));
    const usuarioArray = [];

    if (usuarios.empty) {
      res.status(400).send('No Usuarios found');
    } else {
      usuarios.forEach((doc) => {
        const usuario = new Usuario(
          doc.id,
          doc.data().nombres,
          doc.data().apellido,
          doc.data().correo_electronico,
          doc.data().telefono,
          doc.data().idSede,
          doc.data().idFacultad,
          doc.data().id_tipo_usuario
        );
        usuarioArray.push(usuario);
      });

      res.status(200).send(usuarioArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// GET FOR ID
export const getUsuario = async (req, res, next) => {
  try {
    const id = req.params.id;
    const usuario = doc(db, 'usuarios', id);
    const data = await getDoc(usuario);
    if (data.exists()) {
      res.status(200).send(data.data());
    } else {
      res.status(404).send('Usuario not found');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// UPDATE
export const updateUsuario = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const usuario = doc(db, 'usuarios', id);
    await updateDoc(usuario, data);
    res.status(200).send('Usuario updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// DELETE
export const deleteUsuario = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'usuarios', id));
    res.status(200).send('Usuario deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
