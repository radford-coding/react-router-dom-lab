import { useParams } from "react-router";

const MailboxDetails = (props) => {

    const { mailboxID } = useParams();
    const thisBox = props.mailboxes.find(box => box._id === Number(mailboxID));

    return (
        <h1>Mailbox {thisBox._id} deets!</h1>
    );
};

export default MailboxDetails