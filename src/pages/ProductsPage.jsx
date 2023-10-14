import { useLocation, useParams } from "react-router-dom";
import { useListApi } from "../hooks/useListApi"
import { useEffect, useState } from "react";
import { CardsProducts } from "../components/cards/CardsProducts";


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

    

    if (error) {
        return (
            <h1>Hubo un error en el fetching de datos</h1>
        )
    };


    return (
        <section className="w-full flex flex-row">
            <div className="w-1/4">

            </div>
            <div className="w-3/4 block mt-10 mb-10">
                <CardsProducts data={data} loading={loading} />
            </div>
        </section>
    )
}