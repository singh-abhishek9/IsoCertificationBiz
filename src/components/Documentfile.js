import React from 'react'
import { IoDocumentSharp } from "react-icons/io5";
import { MdDocumentScanner } from "react-icons/md";
import { GrDocumentSound } from "react-icons/gr";
import { GrDocumentStore } from "react-icons/gr";
export default function Documentfile() {
  return (
    <div className='flex flex-col justify-between text-slate-100 font-bold w-[80%] mx-auto items-center gap-20'>
        <p className='text-3xl'>Documents Required for ISO Certification</p>
        <div className='flex flex-row justify-between w-full'>
            <div className='flex flex-col gap-2 items-center text-2xl text-center'>
            <IoDocumentSharp className='text-6xl'/>
            <p>Registration Proof of Legal Entity</p>
            </div>
            <div className='flex flex-col gap-2 items-center text-2xl'>
            <MdDocumentScanner className='text-6xl'/>
            <p className='text-center'>Bills of Purchase & Invoice Bill</p>
            </div>
            <div className='flex flex-col gap-2 items-center text-2xl text-center'>
            <GrDocumentSound className='text-6xl' />
            <p>Address Proof of The Company</p>
            </div>
            <div className='flex flex-col gap-2 items-center text-2xl text-center'>
            <GrDocumentStore className='text-6xl'/>
            <p>Application
            Form</p>
            </div>
        </div>
    </div>
  )
}
