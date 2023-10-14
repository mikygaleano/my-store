import { Link } from "react-router-dom"

export const NavCuenta = () => {

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
                            src="public/carrito-de-compras.png" 
                            alt="carrito" />
                    </Link>
                </li>
            </ul>
        </nav> 
    )
}