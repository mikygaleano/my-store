import { NavLink } from "react-router-dom"


export const NavBar = ({categories, loading})=> {

    if (loading) {
        return (
            <h3>Loading...</h3>
        )
    }

    return (
        <nav>
            <ul>
                <li>
                    <NavLink 
                        to={'/'}>
                            Home
                    </NavLink>
                </li>
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
        </nav>
    )
}