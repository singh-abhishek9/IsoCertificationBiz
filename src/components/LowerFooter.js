import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
export default function LowerFooter() {
  return (
    <div>
      {/* for the lower part of the footer section */}
      <section className='w-[80%] mx-auto h-fit font-bold font-serif mt-6 flex flex-row justify-between'>
            <div className='flex items-center gap-2'>
                <div><FaRegCopyright /></div>
                <div>2024  ISO Certification Biz. All Rights Reserved</div>
            </div>
            <div className='flex flex-row justify-between space-x-10 text-xl'>
            <FaInstagramSquare />
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
            </div>
        </section>
    </div>
  )
}
