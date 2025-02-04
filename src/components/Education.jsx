import React from 'react'

const Education = () => {
  return (

    <div id='education' className='mt-[100px] md:mx-6 mx-4'>
      <h4 className="md:text-8xl text-5xl font-bold uppercase pb-4 text-white ">Education</h4>
      <h4 className="md:text-8xl text-5xl font-bold uppercase text-zinc-700 ">qualification</h4>
      <div className='flex  md:ml-[100px] ml-[50px] mt-[40px]'>
        <ul className="steps steps-vertical ">
          <li data-content="●" className="step py-[50px]  ">
            <div className='  md:px-10 mt-[30px] text-stone-400 '>
              <p>BTECH IN COMPUTER SCIENCE ENGINEERING</p>
              <p>K L University</p>
              <p>scored-8.01GPA</p>
            </div>
          </li>
          <li data-content="●" className="step  ">
            <div className='  px-10  md:ml-12 text-stone-400'>
              <p>BOARD OF INTERMEDIATE,AP</p>
              <p>Sri Chaitanya Junior College</p>
              <p>scored-9.2GPA</p>
            </div>
          </li>
          <li data-content="●" className="step">
            <div className=' px-10  md:ml-6 text-stone-400'>
              <p>BOARD OF SECONDARY EDUCATION,AP</p>
              <p>Sri Chaitanya School</p>
              <p>scored-9.7GPA</p>
            </div>
          </li>

        </ul>
      </div>

    </div>
  )
}

export default Education