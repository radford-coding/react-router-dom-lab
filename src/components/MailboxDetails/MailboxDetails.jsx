import { useParams } from "react-router";

const MailboxDetails = (props) => {

    const { mailboxID } = useParams();
    const thisBox = props.mailboxes.find(box => box._id === Number(mailboxID));

    return (
        <>
            {thisBox !== undefined
                ? <>

                    <h1>Mailbox {thisBox._id}</h1>
                    <h3>Details</h3>
                    <p>Boxholder: {thisBox.boxOwner}</p>
                    <p>Box Size: {thisBox.boxSize}</p>
                </>
                : <h3>Mailbox not found</h3>
            }
        </>
    );
};

export default MailboxDetails