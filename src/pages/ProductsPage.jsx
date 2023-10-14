import { useLocation, useParams } from "react-router-dom";
import { useListApi } from "../hooks/useListApi"
import { useEffect, useState } from "react";


export const ProductsPage = ()=> {

    const { categoryName } = useParams(); // Obtenemos el parámetro de ruta
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const [ title, setTitle ] = useState('');
    
    

    const resetTitle = ()=> {
        const newTitle = searchParams.get('title')
        setTitle('');
        setTitle(newTitle)
    };
    


    useEffect(()=> {
        resetTitle();
    },[searchParams]);

    const { data, loading, error } = useListApi(categoryName, title);



    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    };

    if (error) {
        return (
            <h1>Hubo un error en el fetching de datos</h1>
        )
    };


    return (
        <>
            {
                data.map(product => (
                    <div key={product.id}>
                        <strong>{product.category}</strong>
                        <h2>{product.title}</h2>
                        <span>{product.price}</span>
                    </div>
                ))
            }
        </>
    )
}