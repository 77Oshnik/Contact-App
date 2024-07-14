import React from 'react'
import { IoMdContact } from "react-icons/io";

const NoContactFound = () => {
    return (
        <div className="flex h-[80vh] items-center justify-center gap-4">
          <IoMdContact className='text-white h-[50px] w-[50px]'/>
          <h3 className="text-2xl font-semibold text-white"> Contact Not Found</h3>
        </div>
      );
}

export default NoContactFound
