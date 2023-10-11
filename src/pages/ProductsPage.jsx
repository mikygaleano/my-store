import { useLocation, useParams } from "react-router-dom";
import { useListApi } from "../hooks/useListApi"


export const ProductsPage = ()=> {

    const { categoryName } = useParams(); // Obtenemos el parámetro de ruta
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const title = searchParams.get("title");
    
    const { data, loading, error } = useListApi(categoryName, title);


    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    };

    if (error) {
        return (
            <h1>{error}</h1>
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