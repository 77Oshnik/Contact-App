import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { AiFillPlusCircle } from "react-icons/ai";

const Search = ({ onOpen, contacts, setFilteredContacts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    // Filter contacts based on search term
    const filtered = contacts.filter((contact) =>
      contact.Name.toLowerCase().includes(value)
    );
    setFilteredContacts(filtered);
  };

  return (
    <div className="flex items-center gap-1 relative">
<CiSearch className="left-[20px] absolute size-6  text-white ml-2" />      <input
        type="text"
        placeholder="Search Contact by Name"
        className="pl-10 ml-4 w-[290px] bg-transparent border rounded-md h-10 border-white text-white"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div>
      <AiFillPlusCircle className="text-white h-[52px] w-[52px] cursor-pointer" onClick={onOpen} />
      </div>
    </div>
  );
};

export default Search;
