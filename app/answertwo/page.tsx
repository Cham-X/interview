import React from 'react'

const page = () => {
  return (
    <div className='p-16'>
      <h3 className='text-bold text-2xl'>What is JSX?</h3>
      <p className='text-justify py-4'>
        JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code directly within JavaScript
      </p>
      <h3 className='text-bold text-2xl py-4'>Why is it used in React?</h3>
      <ul>
        <li><strong>Simplifies Code:</strong> It makes the code easier to read and write by combining UI structure and logic.
        </li>
        <li>
          <strong>React.createElement Abstraction:</strong> It abstracts the <code className='bg-[#333] p-1'>React.createElement()</code> function, making the syntax cleaner and more intuitive.
        </li>
        <li>
          <strong>Improves Developer Experience:</strong>  Allows embedding JavaScript expressions within curly braces, enabling dynamic content rendering.
        </li>
        <li>
          <strong>Enhances Maintainability:</strong>  By colocating markup and logic, it improves the maintainability of components.
        </li>
      </ul>
      <p>Example:</p>
      <code className='bg-[#333] text-white p-4 block whitespace-pre'>
        {`import React from 'react';

const Greeting = () => {
  const name = "Glory";

  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
};

export default Greeting;
   `}
      </code>
    </div>
  )
}

export default page
