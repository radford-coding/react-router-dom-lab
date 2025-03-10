const MailboxList = (props) => {
    return (
        <>
            <h1>Mailbox List</h1>
            <ul>
                {props.mailboxes.map((box) => (
                    <li>Mailbox {box._id}</li>
                ))}
            </ul>
        </>
    );
};

export default MailboxList