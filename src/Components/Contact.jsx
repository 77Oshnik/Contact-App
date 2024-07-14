import { collection, deleteDoc, doc } from 'firebase/firestore';
import React from 'react'
import { CgProfile } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {db} from "../config/firebase"
import AddandDelete from './AddandDelete';
import useDiscoluse from '../hooks/useDiscoluse';
import { toast,ToastContainer } from 'react-toastify';

const Contact = ({ contact }) => {

  const { isOpen, onClose, onOpen } = useDiscoluse();

  const deleteContact=async (id)=>{
    try {
      const contactRef=collection(db,"Contacts")
      await deleteDoc(doc(contactRef,id))
      toast.info("Contact Deleted Successfully")
      
    }catch (error) {
      console.log(error);
    }
  }


  return (
    <div
      key={contact.id}
      className="m-4 rounded-md flex items-center justify-between bg-yellow p-2"
    >
      <div className="flex items-center gap-2">
        <CgProfile className="text-orange h-[37px] w-[37px] flex-shrink-0" />
        <div className='flex-grow'>
          <h2 className="font-medium">{contact.Name}</h2>
          <p className="text-sm">{contact.Email}</p>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <FaEdit onClick={onOpen} className=" h-[25px] w-[25px]" />
        <MdDelete onClick={()=>deleteContact(contact.id)} className=" h-[25px] w-[25px]" />
      </div>
      <AddandDelete contact={contact} isOpen={isOpen} onClose={onClose} isUpdate={true}/>
    </div>
  )
}

export default Contact
