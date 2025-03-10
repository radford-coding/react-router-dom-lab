import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';

const dummyData = [
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

const App = () => {

  const [mailboxes, setMailboxes] = useState(dummyData);

  const addBox = (newBoxData) => {
    newBoxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newBoxData]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<h1>Post Office</h1>}></Route>
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes} />}></Route>
        <Route path='/new-mailbox' element={<h1>New Mailbox</h1>}></Route>
        <Route path='/mailboxes/:mailboxID' element={<MailboxDetails mailboxes={mailboxes}/>}></Route>
      </Routes>
    </>
  );
};

export default App;