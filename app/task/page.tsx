"use client"

import React, { useState, useEffect } from 'react';

// Define the type for a single task
type Task = {
  id: string;
  title: string;
  completed: boolean;
};

const page = () => {

  // form validation
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.email.includes('@')) errors.email = 'Invalid email.';
    if (formData.password.length < 6) errors.password = 'Password must be at least 6 characters.';
    return errors;
  };

  const handleSubmit = (e: any) => {
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

  //creating a todo list
  // Type the state as an array of strings
  const [tasks, setTasks] = useState<string[]>(
    () => JSON.parse(localStorage.getItem('tasks') || '[]') as string[]
  );

  // Type the task as a string
  const [task, setTask] = useState<string>('');

  // Function to add a new task
  const addTask = (): void => {
    if (task.trim()) { // Ensure task is not empty
      const updatedTasks = [...tasks, task];
      setTasks(updatedTasks);
      setTask('');
    }
  };

  // Function to delete a task by index
  const deleteTask = (index: number): void => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Effect to sync tasks to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      {/* form validation */}
      <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-4 mt-10'>
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
        <button type="submit" className='bg-inherit text-white rounded-full p-3 border w-[20rem] border-[#333] hover:bg-[#333] focus:none'>Submit</button>
      </form>

      {/* creating a list that can be filtered based on user input */}
      <div className='flex flex-col items-center justify-center gap-4 mt-10'>
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

      {/* creating a todo list */}
      <div className='flex flex-col items-center justify-center gap-4 mt-10'>
        <h2 className='font-bold leading-2xl text-4'>Add to todo list </h2>
        {/* Input field for adding a new task */}
        <input
          value={task}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
          placeholder="New Task"
          className='bg-inherit text-white rounded-full p-3 border w-[20rem] border-[#333]  focus:none'
        />
        <button onClick={addTask} className='bg-inherit text-white rounded-full p-3 border w-[20rem] border-[#333] hover:bg-[#333] focus:none' >Add Task</button>

        {/* List of tasks */}
        <ul>
          {tasks.map((t, i) => (
            <li key={i}>
              {t} <button onClick={() => deleteTask(i)} className='ml-5rem'>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default page
