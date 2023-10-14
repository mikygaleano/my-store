
import { fakeStoreApi } from "./constantes";

// Función para obtener todos los productos
export const getAllProducts = async ()=> {
  try {
    const response = await fetch(fakeStoreApi);
    if (!response.ok) {
      throw new Error('No se pudo obtener la lista de productos.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener todos los productos:', error);
    throw error;
  }
}

// Función para obtener productos por categoría
export const getProductsByCategory = async (categoryName)=> {
  try {
    const response = await fetch(`${fakeStoreApi}/category/${categoryName}`);
    if (!response.ok) {
      throw new Error(`No se pudo obtener la lista de productos para la categoría ${categoryName}.`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al obtener productos para la categoría ${categoryName}:`, error);
    throw error;
  }
}






