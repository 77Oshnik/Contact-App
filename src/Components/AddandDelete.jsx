import React from 'react'
import Modal from './Modal'
import { Field, Formik,Form } from 'formik'
import {db} from "../config/firebase"
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { toast, ToastContainer } from 'react-toastify'
import * as Yup from "yup";
import { ErrorMessage } from 'formik'


const contactSchemaValidation = Yup.object().shape({
    Name: Yup.string().required("Name is Required"),
    Email: Yup.string().email("Invalid Email").required("Email is Required"),
  });

const AddandDelete = ({isOpen,onClose,isUpdate,contact}) => {

    const  addContact=async (contact)=>{
        try {
            const contactRef=collection(db,"Contacts")
            await addDoc(contactRef,contact)
            toast.info("Contact Added Successfully")
        } catch (error) {
            console.log(error);
        }
    }
    const  updateContact=async (contact,id)=>{
        try {
            const contactRef=doc(db,"Contacts",id)
            await updateDoc(contactRef,contact)
            toast.info("Contact Updated Successfully")
        } catch (error) {
            console.log(error);
        }
    }

  return (
  <>
  <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
        validationSchema={contactSchemaValidation}
        initialValues={isUpdate? 
            {
                Name:contact.Name,
                Email:contact.Email,
            }:{
            Name:"",
            Email:"",
        }}
        onSubmit={(values)=>{
            console.log(values);
            isUpdate ?  updateContact( values,contact.id) :
            addContact(values)
            onClose();
        
        }}>
            <Form action="" className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name">Name</label>
                    <Field type="text" name="Name" className='border px-3 py-1.5' />
                    <div className=" text-xs text-red-500">
                <ErrorMessage name="Name" />
              </div>

                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email">Email</label>
                    <Field type="email" name="Email" className='border p-3 py-1.5'/>
                    <div className=" text-xs text-red-500">
                <ErrorMessage name="Email" />
              </div>

                </div>
                <button  className='bg-orange self-end rounded-md px-3 py-1.5'>{isUpdate ? "Update" : "Add"} Contact</button>
            </Form>
        </Formik>
        </Modal>
  </>
  
  )
}

export default AddandDelete
