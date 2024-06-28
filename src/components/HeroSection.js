import React, { useRef } from 'react'
import bgimage from '../images/background.jpg';
import CallUsButton from './CallUsButton';
import GetQuote from './GetQuote';
import ColorText from './ColorText';
import NormalTextColor from './NormalTextColor';
import ContactForm from './ContactForm';
import BlueColor from './BlueColor';
import why from '../images/why.png';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Documentfile from './Documentfile';
import Footer from './Footer';
import LowerFooter from './LowerFooter';
export default function HeroSection({p1,p2,p3,line1,line2,line3,line4,line5,name,paragraph,image}) {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const documentRef = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);



  return (
    <div>
      <div className='bg-cover bg-center h-screen  top-14'
      style={{backgroundImage:`url(${bgimage})`}}
      >
        {/* for the above the image */}
        <section className='w-10/12 mx-auto flex flex-row items-center h-full justify-between' ref={homeRef} id='home'>
        {/* left part on the image */}
              <div className='flex flex-col gap-4 text-white w-[50%] p-3'>
                    <div>
                      <ColorText normalText={p1} text={p2}/>  
                      <ColorText normalText={p3}/> 
                    </div>
                    <div><NormalTextColor text={line1}/></div>
                    <div><NormalTextColor text={line2}/></div>
                    <div><NormalTextColor text={line3}/></div>
                    <div><NormalTextColor text={line4}/></div>
                    <div><NormalTextColor text={line5}/></div>
                    <div className='flex flex-row w-fit justify-between gap-4'>
                      <div>
                       <CallUsButton/>
                      </div>
                      <div>
                        <GetQuote/>
                      </div>
                    </div>
              </div>
              {/* right part on the image */}
              <div className='w-[40%] p-10'>
              <img src={image} alt='image'/>
              </div>
        </section>

      </div>

        {/* about name certification */}
      <section ref={aboutRef} className='w-[80%] flex flex-row justify-between mt-14 mx-auto mb-12' id='about'>
        <div className='w-[40%]'>
            <span className='text-4xl font-bold text-blue-300 font-serif
            '>About </span>
            <ColorText text={name}/>
            <span className='text-4xl font-bold text-blue-300 font-serif
            '>certification</span>
            <p className='font-bold text-md mt-3'>
            {paragraph}
            </p>
        </div>
        <div className='w-[40%]'><ContactForm/></div>
      </section>

        {/* Why Choose MLR for ISO Certification */}

      <section ref={faqRef} className='w-full bg-gray-100 h-fit pt-10 pb-10' id='faq'>
        <div className='w-[80%] flex flex-row justify-between mx-auto'>
          <div>
              <img src={why} alt='why imag' className='w-[50%] h-full'/>
            </div>
          <div className='w-[50%]'>
                <BlueColor text={"Why Choose ISO Certification Biz "}/>
                <p className='font-bold text-md mt-3'>
                We have more then 5 years of experience and a huge large network that will help you to get your company ISO Certified. You need to fill simple form and our team Will contact you within 5 to 10 minutes and discuss all the process. After that you can apply for ISO Certification online. Our company located in Delhi or some other states. We also provide our service all over India.
                </p>
                <ul className='font-medium text-slate-700'>
                  <li className='flex flex-row gap-1 items-center'><IoIosArrowDropdownCircle /><p>Work Closely as a Team.</p></li>
                  <li className='flex flex-row gap-1 items-center'><IoIosArrowDropdownCircle /><p>Dedicated & Committed Deliveries</p></li>
                  <li className='flex flex-row gap-1 items-center'><IoIosArrowDropdownCircle /><p>Cost Effective.</p></li>
                  <li className='flex flex-row gap-1 items-center'><IoIosArrowDropdownCircle /><p>24 hours customer supports facilities.</p></li>
                </ul>
            </div>
        </div>
      </section>

      {/* document required section */}

      <section ref={documentRef} className='w-full bg-green-300 h-fit pt-10 pb-16' id='documentation'>
          <Documentfile/>
      </section>
        
        {/* footer section */}

        <section ref={contactRef} className='w-full h-fit bg-blue-400 p-5' id='contact'>
            <Footer/>
        </section>
       
       {/* lower footer */}

      <section className='w-full h-fit bg-gray-600 p-3'>
          <LowerFooter/>
      </section>
      
    </div>
  )
}
