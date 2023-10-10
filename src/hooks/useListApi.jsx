import { useEffect, useState } from "react"
import { getAllProducts, getProductsByCategory, getProductsByTitle } from "../utils/listApi";


export const useListApi = (categoryName, title)=> {

    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(()=> {
        const dataFetch = async ()=> {
            try {
                setLoading(true)
                let productList;
                if (categoryName) {
                    productList = await getProductsByCategory(categoryName);
                } else if (title) {
                    productList = await getProductsByTitle(title);
                } else {
                    productList = await getAllProducts();
                    console.log(productList.filter(product => product.title === title))
                };
                setData(productList);
            } catch (error) {
                setError(error);
                console.error('Error fetching products:', error)
            } finally {
                setLoading(false);
            }
        };

        dataFetch();
    }, [categoryName, title]);

    return {
        data,
        loading,
        error
    }
};