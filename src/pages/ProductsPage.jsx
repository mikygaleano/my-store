import { useLocation, useParams } from "react-router-dom";
import { useListApi } from "../hooks/useListApi"
import { useEffect, useState } from "react";
import { CardsProducts } from "../components/cards/CardsProducts";
import { Aside } from "../components/aside/Aside";


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
           <div className="w-full justify-self-center flex place-content-center">
            <h3>Loading...</h3>
           </div>
        )
    }
    

    if (error) {
        return (
            <h1>Hubo un error en el fetching de datos</h1>
        )
    };


    return (
        <section className="w-full flex flex-row bg-slate-100">
            <div className="w-1/4">
                <Aside/>
            </div>
            <div className="w-3/4 flex flex-col mt-10 mb-10">
                <CardsProducts data={data}/>
            </div>
        </section>
    )
}