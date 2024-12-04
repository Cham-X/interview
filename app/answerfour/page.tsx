import React from 'react'

const page = () => {
  return (
    <div className='p-16'>
      <h1 className='text-bold text-2xl'>Explain the concept of lifting state up in React.</h1>
      <p className='text-justify py-4'>
        In React, lifting state up refers to the practice of moving state from a child component to a common parent component in order to share data or functionality between components that need access to the same state. This is necessary when multiple components need to communicate or work with the same state, as React components are isolated and do not share state directly.
      </p>
      <p className='text-justify py-4'>
        By lifting state up, you make the parent component the "source of truth" for that state and pass the state down to child components via props. The child components can then send updates to the parent via callback functions, which allow the state to be updated and passed back down to all relevant child components.
      </p>
      <h1 className='text-bold text-2xl'>Why is Lifting State Up Necessary?</h1>
      <ul>
        <li><strong> State Sharing:</strong> When two or more components need access to the same state or need to be synchronized, lifting state up allows the parent to manage the shared state.
        </li>
        <li>
          <strong>Centralized Control:</strong>  The parent can control and update the state, and it ensures consistent behavior across child components.
        </li>
      </ul>
      <h1 className='text-bold text-2xl'>Example: Lifting State Up with a Form to Toggle Between Two Options</h1>
      <p className='py-4 text-justify'>
        Imagine a situation where you have two components <code className='bg-[#333] text-white p-1'> Option1</code> and <code className='bg-[#333] text-white p-1'> Option2</code> that need to know whether a checkbox is checked or not. Instead of each component managing its own state, we can lift the state up to the <code className='bg-[#333] text-white p-1'>App</code> component.
      </p>
      <code className='bg-[#333] text-white p-4 block whitespace-pre'>
        {`import React, { useState } from 'react';

// Option1 component: Displays if the checkbox is checked
const Option1 = ({ isChecked }) => {
  return (
    <div>
      {isChecked ? <p>Option 1 is selected!</p> : <p>Option 1 is not selected.</p>}
    </div>
  );
};

// Option2 component: Displays if the checkbox is checked
const Option2 = ({ isChecked }) => {
  return (
    <div>
      {isChecked ? <p>Option 2 is selected!</p> : <p>Option 2 is not selected.</p>}
    </div>
  );
};

// App component: Lifts state up and passes it down to children
const App = () => {
  const [isChecked, setIsChecked] = useState(false); // State lifted to the parent

  // Handler to toggle the checkbox
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <h1>Lifted State Example</h1>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Toggle Option
      </label>

      <Option1 isChecked={isChecked} /> {/* Passing state down to Option1 */}
      <Option2 isChecked={isChecked} /> {/* Passing state down to Option2 */}
    </div>
  );
};

export default App;`}
      </code>

    </div>
  )
}

export default page
