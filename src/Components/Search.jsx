import React from "react";
import { CiSearch } from "react-icons/ci";
import { AiFillPlusCircle } from "react-icons/ai";

const Search = () => {
  return (
    <div className="flex items-center gap-1">
      <CiSearch className="left-[20px] absolute size-6  text-white ml-2" />

      <input
        type="text"
        placeholder="Search Contact"
        className="pl-10 ml-4 w-[290px] relative bg-transparent border rounded-md h-10 border-white"
      />
      <div><AiFillPlusCircle className="text-white h-[52px] w-[52px] cursor-pointer"/></div>
    </div>
  );
};

export default Search;
