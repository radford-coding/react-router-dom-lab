import { useState } from 'react';
import { useNavigate } from 'react-router';

const initialState = {
    boxOwner: '',
    boxSize: 'Small',
};

const MailboxForm = (props) => {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addBox(formData);
        setFormData(initialState);
        navigate('/mailboxes');
    };

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    };

    return (
        <main>
            <h1>New Mailbox</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxOwner">Enter a Boxholder: </label>
                <input
                    type="text"
                    id="boxOwner"
                    name="boxOwner"
                    placeholder="Boxholder name"
                    value={formData.boxOwner}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="boxSize">Select a Box Size: </label>
                <select
                    name="boxSize"
                    id="boxSize"
                    value={formData.boxSize}
                    onChange={handleChange}
                >
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
                <br />
                <button type="submit" disabled={formData.boxOwner ? false : true}>Submit</button>
            </form>
        </main>
    );
};

export default MailboxForm;