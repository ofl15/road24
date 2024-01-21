import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import Infors from "./Infors";

const Contact = () => {

    const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_xvk20wv",
        "template_60fub9d",
        {
          from_name: form.name,
          to_name: "Feruz",
          from_email: form.email,
          to_email: "olimovferuz880@gmail.com",
          message: form.message,
        },
        "Tw5Nlh5b32TNkQN2k"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };


  return (
    <div className='Main grid grid-cols-2 gap-4  '>
        <Infors />


        <div
        className='flex-[0.75] shadow-lg bg-slate-300 p-8 rounded-2xl mt-5'
        style={{height:'80vh' , width:'80vh'}}
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className=' font-medium mb-4'>Your Message</span>
            <textarea
              rows={1}
              name='message'
              style={{maxHeight:'56px' , minHeight:'56px'}}
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary  rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl mt-6 ml-36 outline-none w-60 bg-lime-300 text-slate-700 font-bold shadow-md shadow-primary hover:bg-lime-500 hover:text-white'
            style={{transition:'.2s ease all'}}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>

  )
}

export default Contact