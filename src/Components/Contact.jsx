import React from 'react'
import { CgProfile } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Contact = ({contact}) => {
  return (
    <div
            key={contact.id}
            className="m-4 rounded-md flex items-center justify-around bg-yellow">
          
            <div className="flex items-center gap-3">
            <CgProfile className="text-orange h-[37px] w-[37px]" />
              <div>
              <h2 className="font-medium">{contact.Name}</h2>
              <p className="text-sm">{contact.Email}</p>
              </div>
            
            </div>
            <div className="flex gap-2 items-center">
            <FaEdit className=" h-[25px] w-[25px]"/>
            <MdDelete className=" h-[25px] w-[25px]" />
            </div>
           
          </div>
  )
}

export default Contact
