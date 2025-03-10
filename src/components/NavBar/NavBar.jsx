import { NavLink } from "react-router";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        to='/'
                        style={({ isActive }) => ({
                            color: isActive ? 'white' : 'black',
                        })}
                    >
                        Home
                    </NavLink>
                </li>
                
            </ul>
        </nav>
    );
};

export default NavBar;