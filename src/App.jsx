import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import MailboxForm from './components/MailboxForm/MailboxForm';
import LetterForm from './components/LetterForm/LetterForm';

const starterMailboxes = [
  {
    _id: 1,
    boxSize: 'Small',
    boxOwner: 'Alex',
  },
  {
    _id: 2,
    boxSize: 'Small',
    boxOwner: 'Barbara',
  },
];

const starterLetters = [
  {
    mailboxId: 1,
    recipient: 'Alex',
    message: 'I hope this letter finds you well...',
  },
  {
    mailboxId: 2,
    recipient: 'Barbara',
    message: 'Thanks for the birthday present!',
  },
];

const App = () => {

  const [mailboxes, setMailboxes] = useState(starterMailboxes);
  const [letters, setLetters] = useState(starterLetters);

  const addBox = (newBoxData) => {
    newBoxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newBoxData]);
  };

  const addLetter = (newLetter) => {
    newLetter.mailboxId = letters.length + 1;
    setLetters([...letters, newLetter]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<h1>Post Office</h1>}></Route>
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes} />}></Route>
        <Route path='/new-mailbox' element={<MailboxForm addBox={addBox} />}></Route>
        <Route path='/new-letter' element={<LetterForm addLetter={addLetter} />}></Route>
        <Route path='/mailboxes/:mailboxID' element={<MailboxDetails mailboxes={mailboxes} />}></Route>
        <Route path="*" element={<h6>[not found]</h6>}></Route>
      </Routes>
    </>
  );
};

export default App;