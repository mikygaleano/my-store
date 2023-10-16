import { useState } from "react"
import { NavLink } from "react-router-dom"


export const NavBar = ({categories, loading, error, open, btnCategories})=> {

    

    if (loading) {
        return (
            <h3>Loading...</h3>
        )
    }

    if (error) {
        return (
            <h3>Error en el fetching de datos</h3>
        )
    }

    return (
        <nav className="flex flex-row">
            <div className="w-20 z-10 pl-1">
                <button 
                    className="bg-transparent cursor-pointer text-sm text-neutral-500"
                    type="button"
                    onClick={btnCategories}
                    >Categorías
                </button>
                <ul className={`${open? 'visible w-48 h-80 flex flex-col gap-3 mt-3 bg-slate-800 text-white rounded-md justify-start p-4': 'hidden'}`}>
                    {
                        categories.map((category, index) => (
                            <li key={index}>
                                <NavLink 
                                    className='text-xs'
                                    to={`/category/${category}`}>
                                        {category}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <ul className="flex gap-3 m-1 text-sm text-neutral-500">
                <li>
                    <NavLink 
                        to={'/'}>
                            Ofertas
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={'/'}>
                            Historial
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={'/'}>
                            Vender
                    </NavLink>
                </li> 
                <li>
                    <NavLink 
                        to={'/'}>
                            Ayuda
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}