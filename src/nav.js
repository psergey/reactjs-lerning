import { NavLink } from "react-router-dom";

const Nav = () => (
    <nav>
        <ul className='nav'>
            <li>
                <NavLink exact='true' className='active' to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink className='active' to='/popular'>Popular</NavLink>
            </li>
            <li>
                <NavLink className='active' to='/battle'>Battle</NavLink>
            </li>
        </ul>
    </nav>
)

export default Nav;