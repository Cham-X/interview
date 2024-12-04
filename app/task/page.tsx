"use client"

import React, { useState } from 'react';

const page = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.email.includes('@')) errors.email = 'Invalid email.';
    if (formData.password.length < 6) errors.password = 'Password must be at least 6 characters.';
    return errors;
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) setErrors(validationErrors);
    else alert('Form Submitted');
  };

  //creating a list that can be filtered based on user input 
   const [query, setQuery] = useState('');
  const users = ['Glory', 'chamx', 'david', 'abdul'];

  const filteredItems = users.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
    <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-4 mt-12'>
      <h2 className='font-bold leading-2xl text-4'>Fill in the following input :</h2>
      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className='bg-inherit text-white rounded-full p-3 border w-[20rem] border-[#333]  focus:none'
      />
      {errors.email && <span>{errors.email}</span>}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
         className='bg-inherit text-white rounded-full p-3 border w-[20rem] border-[#333]  focus:none'
      />
      {errors.password && <span className='text-red'>{errors.password}</span>}
      <button type="submit"  className='bg-inherit text-white rounded-full p-3 border w-[20rem] border-[#333] hover:bg-[#333] focus:none'>Submit</button>
      </form>

      {/* creating a list that can be filtered based on user input */}
      <div className='flex flex-col items-center justify-center gap-4 mt-12'>
      <h2 className='font-bold leading-2xl text-4'>Search for user</h2>
      <input
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
           className='bg-inherit text-white rounded-full p-3 border w-[20rem] border-[#333]  focus:none'
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default page
