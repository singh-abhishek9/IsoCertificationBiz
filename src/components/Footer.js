import React from 'react'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {

    const handleClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };

    const handleCall=(number)=>{
        window.location.href=`tel:${8528221667}`
    };
    const handleEmail=(email)=>{
        window.location.href=`email:${'abhisheksingh221667@gmail.com'}`
    }
  return (
    <div>
        {/* for upper part of the footer section */}
        <section className='w-[80%] mx-auto flex justify-between text-white'>
                {/* first section */}

                <div className='w-[30%]'>
                    <div>1</div>
                    <div className='text-lg font-medium'>The International Organization for Standardization (ISO) management standards are a series of frameworks that help you run your business effectively. ISO certification is proof from a third party, such as ourselves that you comply with an ISO management standard.</div>
                </div>
                {/* second section */}
                 <div className='font-bold text-slate-50 w-[30%]'>
                    <p>Important Links</p>
                    <ul>
                    <a href='#home' onClick={() => handleClick('home')} className='flex flex-row gap-1 items-center'><li><IoIosArrowDropdownCircle /></li>Home</a> 
                    <a href='#about' onClick={() => handleClick('about')} className='flex flex-row gap-1 items-center'><li><IoIosArrowDropdownCircle /></li>About Us</a>
                    <a href='#service' onClick={() => handleClick('service')} className='flex flex-row gap-1 items-center hover:cursor-pointer'><li><IoIosArrowDropdownCircle /></li>Our Services</a>
                    <a href='#documentation' onClick={() => handleClick('documentation')} className='flex flex-row gap-1 items-center'><li><IoIosArrowDropdownCircle /></li>documentation</a>
                    <a href='#faq' onClick={() => handleClick('faq')} className='flex flex-row gap-1 items-center'><li><IoIosArrowDropdownCircle /></li>FAQ</a>
                    <a href='#contact' onClick={() => handleClick('contact')} className='flex flex-row gap-1 items-center'><li><IoIosArrowDropdownCircle /></li>contact</a>
                    </ul>
                 </div>

                {/* third section */}
                    <div className='font-bold flex flex-col gap-2 w-[30%]'>
                        <div>Contact Information</div>
                        <div className='flex flex-row gap-1 items-center hover:cursor-pointer' onClick={handleCall}>
                            <div><FaPhoneAlt /></div>
                            <div>+91 8528221667</div>
                        </div>
                        <div className='flex flex-row gap-1 items-center hover:cursor-pointer' onClick={handleEmail}>
                            <div><MdEmail /></div>
                            <div>abhisheksingh221667@gmail.com</div>
                        </div>
                        <div className='flex flex-row gap-1'>
                            <div><FaLocationDot /></div>
                            <div>5/133, Ground Floor, Vineet Khand-5, Gomti Nagar, Lucknow, Uttar Pradesh - 226010, India</div>
                        </div>
                        <div>Regt. Office</div>
                        <div className='flex flex-row gap-1'>
                            <div><FaLocationDot /></div>
                            <div>5/133, Ground Floor, Vineet Khand-5, Gomti Nagar, Lucknow, Uttar Pradesh - 226010, India</div>
                        </div>
                    </div>
        </section>

        
    </div>
  )
}
