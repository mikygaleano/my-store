import { v4 as uuidv4 } from 'uuid';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useListApi } from "../hooks/useListApi"
import { useEffect, useState } from "react";
import { CardsProducts } from "../components/cards/CardsProducts";
import { Aside } from "../components/aside/Aside";


export const ProductsPage = ()=> {

    const uniquePageId = uuidv4(); // Genera un identificador único para la página


    const navigate = useNavigate();


    const onClickDetail = (productTitle)=> {
        navigate(`/product/detail/${productTitle}`)
    }

    const { categoryName, id } = useParams(); // Obtenemos el parámetro de ruta
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
        <section key={uniquePageId} className="w-full flex flex-row bg-slate-100">
            <div className="w-1/4">
                <Aside/>
            </div>
            <div className="w-3/4 flex flex-col mb-10">
                <CardsProducts data={data} onClickDatail={onClickDetail}/>
            </div>
        </section>
    )
}