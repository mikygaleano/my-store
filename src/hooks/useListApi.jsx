import { useEffect, useState } from "react"
import { getAllProducts, getProductsByCategory } from "../utils/listApi";


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
                    const getTitle = await getAllProducts();
                    productList = await getTitle.filter(product => product.title.includes(title))
                } else {
                    productList = await getAllProducts();
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