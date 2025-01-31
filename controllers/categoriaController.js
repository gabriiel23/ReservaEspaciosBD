import firebase from '../firebase.js';
import category from '../models/categoriaModel.js';

import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  CollectionReference,
  DocumentReference,
} from 'firebase/firestore';
const db = getFirestore(firebase);

export const createCategory = async (req, res, next) => {
  try {
    const data = req.body;
    const category = {
      nombre: data.nombre,
      Categoria_idCategoria: doc(db, "categoria", data.idCategoria)
    };
    await addDoc(collection(db, 'categoria'), category);
    res.status(200).send('Category created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const createSubCategory = async (req, res, next) => {
  try {
    const data = req.body;
    const subCategory = {
      name: data.name,
      reference: doc(db, "categoria", data.idCategory)
    }
    // category/3YDFw7wuKgdHQJoU4aOT
    await addDoc(collection(db, 'categoria', data.idCategory, "sub-category"), subCategory);
    res.status(200).send('Category created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

  export const getCategorys = async (req, res, next) => {
    try {
      const categorys = await getDocs(collection(db, 'categoria'));
      const categoryArray = [];
  
      if (categorys.empty) {
        res.status(400).send('No integration finances found');
      } else {
        categorys.forEach((doc) => {
          const Category = new category (
            doc.id,
            doc.data().name
          );
          categoryArray.push(Category);
        });
  
        res.status(200).send(categoryArray);
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  };



export const getCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const category = doc(db, 'categoria', id);
    const data = await getDoc(category);
    if (data.exists()) {
      res.status(200).send(data.data());
    } else {
      res.status(404).send('Category not found');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const category = doc(db, 'categoria', id);
    await updateDoc(category, data);
    res.status(200).send('Category updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'categoria', id));
    res.status(200).send('Category deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};