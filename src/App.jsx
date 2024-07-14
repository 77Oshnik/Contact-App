import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import Contact from "./Components/Contact";
import AddandDelete from "./Components/AddandDelete";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useDiscoluse from "./hooks/useDiscoluse";
import NoContactFound from "./Components/NoContactFound";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDiscoluse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "Contacts");
        onSnapshot(contactRef, (snapshot) => {
          const contactsList = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setContacts(contactsList);
          setFilteredContacts(contactsList); // Initialize filtered contacts with all contacts
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  return (
    <div className="max-w-[370px] mx-auto relative">
      <Navbar />
      <Search
        onOpen={onOpen}
        contacts={contacts}
        setFilteredContacts={setFilteredContacts}
      />
      <div>
        {filteredContacts.length > 0 ? filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        )) :
        <NoContactFound/>}
      </div>
      <AddandDelete isOpen={isOpen} onClose={onClose} />
      <ToastContainer position="bottom-center" />
      
    </div>
  );
};

export default App;
