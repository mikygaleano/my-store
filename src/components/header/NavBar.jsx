import { useState } from "react"
import { NavLink } from "react-router-dom"


export const NavBar = ({categories, loading, open, btnCategories})=> {

    

    if (loading) {
        return (
            <h3>Loading...</h3>
        )
    }

    return (
        <nav className="self-start inline-flex gap-3">
            <div className="w-20 z-10">
                <button 
                    className="bg-transparent cursor-pointer"
                    type="button"
                    onClick={btnCategories}
                    >Categorías
                </button>
                <ul className={`${open? 'visible w-48 h-80 flex flex-col gap-3 mt-3 bg-slate-800 text-white rounded-md justify-start p-4': 'hidden'}`}>
                    {
                        categories.map((category, index) => (
                            <li key={index}>
                                <NavLink 
                                    to={category}>
                                        {category}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <ul className="flex gap-3">
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