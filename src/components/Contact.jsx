import { useState } from 'react'
import emailjs from '@emailjs/browser';
const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessge, setErroeMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setloading] = useState(false);

  const emailInfo = { from_name: name, email: email, message: message }


  const handleClickSubmit = () => {

    setloading(true);
    emailjs.send('service_sandeep', 'template_46k6ig6', emailInfo, {
      publicKey: 'm9cy0OeIkdx_JgRA_',
    }).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccessMessage("your message is send");
        setloading(false);
        setName("");
        setEmail("");
        setMessage("");
        setInterval(() => {
          setErroeMessage("")
        }, 5000)
      },
      (error) => {
        console.log('FAILED...', error);
        setErroeMessage("sorry,something went wrong");
      },
    );

  }








  return (
    <div id="contact" className='mt-[100px] mx-6 '>
      <h4 className="md:text-8xl text-6xl font-bold uppercase pb-4 text-white ">Let&apos;s Work</h4>
      <h4 className="md:text-8xl text-6xl font-bold uppercase text-zinc-700 ">together</h4>


      <div className='md:mt-[60px]'>

        <div className='md:flex my-6 '>

          <label className="form-control w-full max-w-xs mr-[60px]">
            <div className="label">
              <span className="mx-[-5px] text-stone-400">Name</span>
            </div>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter Name" className="input input-bordered w-full max-w-xs bg-zinc-700 rounded-lg caret-white text-white" />
          </label>


          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="mx-[-5px] text-stone-400">Email</span>
            </div>
            <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter Email" className="input input-bordered w-full max-w-xs bg-zinc-700 rounded-lg caret-white text-white" />
          </label>

        </div>

        <label className="form-control w-full ">
          <div className="label">
            <span className="mx-[-5px] text-stone-400">Message</span>
          </div>
          <textarea onChange={(e) => setMessage(e.target.value)} value={message} className="textarea textarea-bordered h-24 md:w-[700px] bg-zinc-700 rounded-lg caret-white text-white" placeholder="Enter Message"></textarea>
        </label>


        {errorMessge && <p className='text-white mt-6'>{errorMessge}</p>}
        {successMessage && <p className='text-white mt-6'>{successMessage}</p>}

        <button onClick={handleClickSubmit} className='btn md:w-[700px] w-[325px] mt-[40px] mb-[20px] bg-gradient-to-r from-orange-700 to-red-600 text-white border-0'>{loading ? <span className="loading loading-spinner loading-md"></span> : "Submit"}</button>


      </div>


    </div>
  )
}

export default Contact