import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import MailboxList from './components/MailboxList/MailboxList';


const App = () => {

  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newBoxData) => {
    newBoxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newBoxData]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<h1>Post Office</h1>}></Route>
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>}></Route>
        <Route path='/new-mailbox' element={<h1>New Mailbox</h1>}></Route>
      </Routes>
    </>
  );
};

export default App;