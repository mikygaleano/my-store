import { Link } from "react-router-dom";
import { useListCategories } from "../../hooks/useListCategories";
import { NavBar } from "./NavBar"
import { Search } from "./Search";


export const Header = ()=> {
    const { categories, loadingCategories } = useListCategories();


    return (
        <header className="w-full h-28  max-w-7xl grid grid-rows-2 gap-0 bg-yellow_primary p-1">
            <div className="w-full h-3/4 self-start grid grid-cols-3 gap-1">
                <Link
                    className="h-full self-start flex items-center gap-1"
                    to={'/'}>
                    <img
                        className="w-12 h-8" 
                        src="public/logo__mercado_libre.png" 
                        alt="logo mercado libre" />
                        <strong className="text-start font-[Roboto] font-bold text-blue-800">
                            Mercado Libre
                        </strong>
                </Link>
                <Search />
                <img
                    className="self-end w-full h-full"
                    src="public\subscripcion_nivel_6.webp" alt="subscripcion nivel 6" />
            </div>
            <div className="w-full h-fit">
                <NavBar categories={categories} loading={loadingCategories} />
            </div>
        </header>
    )
}