import { NavLink } from "react-router";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        to='/'
                        style={({ isActive }) => ({
                            color: isActive ? 'rgba(255, 255, 255, 0.87)' : '#646cff',
                        })}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/mailboxes'
                        style={({ isActive }) => ({
                            color: isActive ? 'rgba(255, 255, 255, 0.87)' : '#646cff',
                        })}
                    >
                        Mailboxes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/new-mailbox'
                        style={({ isActive }) => ({
                            color: isActive ? 'rgba(255, 255, 255, 0.87)' : '#646cff',
                        })}
                    >
                        New Mailbox
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;