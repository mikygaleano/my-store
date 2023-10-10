import { useEffect, useState } from "react"
import { urlApi } from "../constantes/urlApi";


export const useApiCategories = ()=> {

    const [ data, setData ] = useState();

    const url = `${urlApi}/categories`

    useEffect(()=> {
        const dataFetch = async () => {
           try {
            const res = await fetch(url);
            const dataRes = await res.json();
            setData(dataRes)
           } catch (error) {
            
           }
        };
        dataFetch();
    }, [])

    return {
        data
    }
}