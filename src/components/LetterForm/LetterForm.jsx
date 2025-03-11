import { useState } from "react";
import { useNavigate } from "react-router";

const initialLetter = {
    recipient: '',
    message: '',
    targetMailbox: 1,
};

const LetterForm = (props) => {

    const [letterData, setLetterData] = useState(initialLetter);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addLetter(letterData);
        setLetterData(initialLetter);
        navigate('/mailboxes');
    };

    const handleChange = ({ target }) => {
        setLetterData({ ...letterData, [target.name]: target.value });
    };

    return (
        <main>
            <h1>New Letter</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="targetMailbox">Select a Mailbox</label>
                <select
                    name="targetMailbox"
                    id="targetMailbox"
                    value={letterData.targetMailbox}
                    onChange={handleChange}
                >
                    {props.mailboxes.map((box, index) => (
                        <option key={index} value={box._id}>Mailbox {box._id}</option>
                    ))}
                </select>
                <br />
                <label htmlFor="recipient">Recipient</label>
                <input
                    type="text"
                    id="recipient"
                    name="recipient"
                    placeholder="Recipient name"
                    value={letterData.recipient}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="message">Message</label>
                <input
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Message"
                    value={letterData.message}
                    onChange={handleChange}
                />
                <br />
                <button type="submit" disabled={letterData.recipient && letterData.message ? false : true}>Submit</button>
            </form>
        </main>
    );
};

export default LetterForm