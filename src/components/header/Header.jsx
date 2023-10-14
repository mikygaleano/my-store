import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useListCategories } from "../../hooks/useListCategories";
import { NavBar } from "./NavBar"
import { Search } from "./Search";
import { NavCuenta } from "./NavCuenta";


export const Header = ()=> {

    const navigate = useNavigate();

    const [ inputData, setInputData  ] = useState('');

    const { categories, loadingCategories, error } = useListCategories();

    const [ open, setOpen  ] = useState(false);

    const btnCategories = ()=> {
        open? setOpen(false): setOpen(true);
    }

    const inputChangeSearch = (e) => {
        const newSearch = e.target.value;
        setInputData(newSearch);
        navigate(`/?title=${encodeURIComponent(newSearch)}`);
    }

    const inputSubmitSearch = (e)=> {
        e.preventDefault();
        const newSearch = e.target.value;
        setInputData(newSearch);
        navigate(`/?title=${encodeURIComponent(newSearch)}`);
    }


    return (
        <header className="w-full h-24  max-w-7xl grid grid-rows-2 bg-yellow_primary p-1">
            <div className="w-full h-5/6 self-start grid grid-cols-2 gap-1 mt-2">
                <div className="w-full self-start flex justify-between gap-14">
                    <Link
                        className="w-2/5 h-fit"
                        to={'/'}>
                        <img
                            className="w-40 h-fit" 
                            src="public/logo__mercado_libre.png" 
                            alt="logo mercado libre" />  
                    </Link>
                    <Search inputChangeSearch={inputChangeSearch} inputSubmitSearch={inputSubmitSearch} inputData={inputData} />
                </div>
                <img
                    className="w-96 h-10 place-self-end mb-auto"
                    src="public\subscripcion_nivel_6.webp" alt="subscripcion nivel 6" />
            </div>
            <div className="w-full h-fit grid grid-cols-2 pt-3">

                <div className="w-full flex justify-between">

                    <div className="w-30 flex">
                        <img 
                            className="w-8 h-8 relative bottom-2"
                            src="public/ubicacion.png" 
                            alt="icon ubicacion" />
                        <div className="flex flex-col">
                            <span className="text-xs">Enviar a</span>
                            <span className="text-sm">Buenos Aires 1876</span>
                        </div>
                    </div>

                    <NavBar 
                        categories={categories} 
                        loading={loadingCategories} 
                        error={error}
                        open={open} 
                        btnCategories={btnCategories}
                    />
                </div>

                <div className="w-full h-fit flex justify-end">
                    <NavCuenta />
                </div>
            </div>
        </header>
    )
}