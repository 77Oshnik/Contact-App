import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import Contact from "./Components/Contact";


const App = () => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    const getContact = async () => {
      try {
        const contactRef = collection(db, "Contacts");
        const contactSnapShot = await getDocs(contactRef);
        console.log(contactSnapShot);
        const contactList = contactSnapShot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });
        console.log(contactList);
        setContact(contactList);
      } catch (error) {
        console.log(error);
      }
    };
    getContact();
  }, []);

  return (
    <div className=" max-w-[370px] mx-auto relative">
      <Navbar />
      <Search />
      <div>
        {contact.map((contact) => (
         <Contact key={contact.id} contact={contact}/>
        ))}
      </div>
    </div>
  );
};

export default App;
