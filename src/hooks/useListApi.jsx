import { useEffect, useState } from "react"
import { getAllProducts, getProductsByCategory } from "../utils/listApi";


export const useListApi = (categoryName)=> {

    const [ data, setData ] = useState();
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(()=> {
        const dataFetch = async ()=> {
            try {
                let productList;
                if (categoryName) {
                    productList = await getProductsByCategory(categoryName);
                } else {
                    productList = await getAllProducts();
                }
                setData(productList);
            } catch (error) {
                setError(error);
                console.error('Error fetching products:', error)
            } finally {
                setLoading(false);
            }
        };

        dataFetch();
    }, [categoryName]);

    return {
        data,
        loading,
        error
    }
};