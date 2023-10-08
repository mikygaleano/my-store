import { Link } from "react-router-dom"

export const NavCuenta = () => {

    return (
        <nav>
            <ul className="flex gap-3">
                <li>
                    <Link to={'/'}>
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
                         compras
                    </Link>
                </li>
                <li>
                    <Link to={'/'}>
                        Carrito
                    </Link>
                </li>
            </ul>
        </nav> 
    )
}