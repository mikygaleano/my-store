import { useEffect, useState } from "react";
import { fakeStoreApi } from "../utils/constantes";

export const useListCategories = ()=> {

const [categories, setCategories] = useState([]);
const [ loadingCategories, setLoadingCategories ] = useState(true);
const [ error, setError ] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoadingCategories(true)
        const res = await fetch(fakeStoreApi + '/categories');
        if (!res.ok) {
          throw new error('Error al obtener la lista de categories')
        }
        const categoriesData = await res.json(); // Obtener categorías desde la API
        setCategories(categoriesData);
      } catch (error) {
        setError(error)
        console.error('Error al obtener categorías:', error);
      } finally {
        setLoadingCategories(false)
      }
    };

    fetchCategories();
  }, []);

  return {
    loadingCategories,
    error,
    categories
  };

};
