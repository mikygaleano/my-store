import { useState } from "react"
import { NavLink } from "react-router-dom"


export const NavBar = ({categories, loading})=> {

    const [ open, setOpen  ] = useState(false);

    const btnCategories = ()=> {
        open? setOpen(false): setOpen(true);
    }

    if (loading) {
        return (
            <h3>Loading...</h3>
        )
    }

    return (
        <nav className="place-self-center flex gap-4">
            <div className="flex flex-col">
                <button 
                    className="bg-transparent"
                    type="button"
                    onClick={btnCategories}
                    >Categorías
                </button>
                <ul className={`${open? 'visible flex flex-col gap-3 mt-5': 'hidden'}`}>
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
            <ul className="flex gap-4">
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