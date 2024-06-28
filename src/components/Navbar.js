import React from 'react'
export default function Navbar() {

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='fixed top-0 left-0 right-0  h-14 bg-green-200'>
        <nav className='flex flex-row justify-between w-[80%] mx-auto h-14 items-center'>
        {/* logo of the website will be there */}
            <div>1</div>
            {/* second column of the navbar ul will be there */}
            <div>
                <ul className='flex flex-row justify-between gap-5 font-medium text-slate-600'>
                    <li className=' hover:text-blue-500 transition-all duration-300'>
                    <a href='/' onClick={() => handleClick('home')}>Home</a>
                    </li>
                    <li className=' hover:text-blue-500 transition-all duration-300'>
                     <a href='#about' onClick={() => handleClick('about')}>AboutUs</a>
                    </li>
                    <li>
                      <div  className='relative transition-all duration-300 hover:cursor-pointer group'>
                          <p>Our Services</p>
                          {/* invisible part which comes when hover */}
                          <div className='invisible absolute left-[50%] top-[50%] bg-slate-50 z-[1000] translate-x-[-50%] translate-y-[3em] flex flex-col rounded-lg w-[200px] mr-5 p-5 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-[1.6em] lg:w-[1000px] group-hover:border-t-2 group-hover:border-gray-700'>
                            {/* for the pointer */}
                            <div className='absolute left-[50%] top-0 z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-slate-50'>
                            </div>
                            <div className='flex flex-row justify-between'>
                              <a href='/iso_2000_2011' className='rounded-lg fit p-4 hover:bg-slate-300 transition-all duration-150'>ISO 20000:2011</a>
                              <a href='iso_5001_2011' className='rounded fit p-4 hover:bg-slate-300 transition-all duration-150'>ISO 50001:2011</a>
                              <a href='iso_8000_2014' className='rounded fit p-4 hover:bg-slate-300 transition-all duration-150'>ISO 8000:2014</a>
                            </div>
                            <div className='flex flex-row justify-between items-center'>
                              <a href='iso_9001_2015' className='rounded-lg fit p-4 hover:bg-slate-300 transition-all duration-150'>ISO 9001:2015</a>
                              <a href='iso_10001_2019' className='rounded fit p-4 hover:bg-slate-300 transition-all duration-150'>ISO 10001:2019</a>
                              <a href='iso_13485_2016' className='rounded fit p-4 hover:bg-slate-300 transition-all duration-150'>ISO 13485:2016</a>
                            </div>
                            <div className='flex flex-row justify-between'>
                              <a href='iso_14000_2015' className='rounded-lg fit p-4 hover:bg-slate-300 transition-all duration-150'>ISO 140001:2015</a>
                              <a href='iso_15858_2016' className='rounded fit p-4 hover:bg-slate-300 transition-all duration-150'>ISO 15858:2016</a>
                              <a href='iso_17025_2005' className='rounded fit p-4 hover:bg-slate-300 transition-all duration-150'>ISO 17025:2005</a>
                            </div>   
                            <div className='flex flex-row justify-between'>
                              <a href='iso_21001_2018' className='rounded-lg fit p-4 hover:bg-slate-300 transition-all duration-150'>ISO 21001:2018</a>
                              <a href='iso_22000_2018' className='rounded fit p-4 hover:bg-slate-300 transition-all duration-150'>ISO 22000:2018</a>
                              <a href='iso_27001_2013' className='rounded fit p-4 hover:bg-slate-300 transition-all duration-150'>ISO 27001:2013</a>
                            </div>
                            <div className='flex flex-row justify-between'>
                              <a href='iso_37001_2016' className='rounded-lg fit p-4 hover:bg-slate-300 transition-all duration-150'>ISO 37001:2016</a>
                              <a href='iso_41001_2018' className='rounded fit p-4 hover:bg-slate-300 transition-all duration-150'>ISO 41001:2018</a>
                              <a href='iso_45001_2005' className='rounded fit p-4 hover:bg-slate-300 transition-all duration-150'>ISO 45001:2005</a>
                            </div>
                          </div>
                      </div>
                    </li>
                    <li className=' hover:text-blue-500 transition-all duration-300'>
                      <a href='#documentation' >documentation</a>
                    </li>
                    <li className=' hover:text-blue-500 transition-all duration-300'>
                    <a href='#faq' >FAQ</a>
                    </li>
                    <li className=' hover:text-blue-500 transition-all duration-300'>
                    <a href='#contact' >ContactUs</a>
                    </li>
                   
                </ul>

            </div>
            {/* contact detail of the website will be there */}
            <div>
              <a href='#contact' >
                ContactUs
              </a>
              </div>
        </nav>
    </div>
  )
}
