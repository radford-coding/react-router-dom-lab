import { NavLink } from "react-router";

const MailboxList = (props) => {
    return (
        <>
            <h1>Mailbox List</h1>
            <ul>
                {props.mailboxes.map((box, index) => (
                    <li key={index} className="mail-box">
                        <NavLink
                            to={`/mailboxes/${box._id}`}
                        >
                            Mailbox {box._id}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default MailboxList