import { useEffect, useState } from "react";
import { fakeStoreApi } from "../utils/constantes";

export const useListCategories = ()=> {

const [categories, setCategories] = useState([]);
const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true)
        const res = await fetch(fakeStoreApi + '/categories');
        const categoriesData = await res.json(); // Obtener categorías desde la API
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error al obtener categorías:', error);
      } finally {
        setLoading(false)
      }
    };

    fetchCategories();
  }, []);

  return {
    loading,
    categories
  };

};
