import { useParams } from "react-router";

const MailboxDetails = (props) => {

    const { mailboxID } = useParams();
    const thisBox = props.mailboxes.find(box => box._id === Number(mailboxID));
    const theseLetters = props.letters.filter(letter => Number(letter.targetMailbox) === Number(mailboxID));
    return (
        <>
            {thisBox !== undefined
                ? <>

                    <h1>Mailbox {thisBox._id}</h1>
                    <h3>Details</h3>
                    <p>Boxholder: {thisBox.boxOwner}</p>
                    <p>Box Size: {thisBox.boxSize}</p>
                    <br />
                    {theseLetters.length > 0
                        ? <>
                            <h3>Letters</h3>
                            {theseLetters.map((letter, index) => (
                                <p key={index}>Dear {letter.recipient},
                                    <br />
                                    {letter.message}</p>
                            ))}
                        </>
                        : <h3>[Empty]</h3>
                    }
                </>
                : <h3>Mailbox not found</h3>
            }
        </>
    );
};

export default MailboxDetails