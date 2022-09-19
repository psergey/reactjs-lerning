import { NavLink } from "react-router-dom";

const Nav = () => (
    <nav>
        <ul className='nav'>
            <li>
                <NavLink to='/' end>Home</NavLink>
            </li>
            <li>
                <NavLink to='/popular'>Popular</NavLink>
            </li>
            <li>
                <NavLink to='/battle'>Battle</NavLink>
            </li>
        </ul>
    </nav>
)

export default Nav;