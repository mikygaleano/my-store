/* eslint-disable react/react-in-jsx-scope */
import { Link } from "react-router-dom"

const NavCuenta = () => {

    return (
        <nav>
            <ul className="flex gap-3 text-sm p-1">
                <li>
                    <Link
                        to={'/'}>
                        Creá tu cuenta
                    </Link>
                </li>
                <li>
                    <Link to={'/'}>
                        Ingresá
                    </Link>
                </li>
                <li>
                    <Link to={'/'}>
                        Mis compras
                    </Link>
                </li>
                <li>
                    <Link 
                        to={'/'}>
                        <img 
                            className="w-5"
                            src="carrito-de-compras.png" 
                            alt="carrito" />
                    </Link>
                </li>
            </ul>
        </nav> 
    )
}

export default NavCuenta;