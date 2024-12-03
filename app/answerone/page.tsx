import React from 'react'

const page = () => {
  return (
    <div className='p-16'>
      <h1 className='text-bold text-2xl'>State:</h1>
      <p className='text-justify py-4'>State is a mutable, local data store managed within a React component, used for dynamic updates.It represents the dynamic data or "state" of the component that can change over time. State is local to the component it is defined in and cannot be directly accessed by child components. State is mutable (can change) and is updated using the setState function (in class components) or useState hook (in functional components). Used for interactivity, dynamic rendering, or any data that needs to change within a component.
      </p>
      <code className='bg-[#333] text-white p-4 block whitespace-pre'>
 {`import React, { useState } from 'react';

// Declare a state variable \`count\` and a function \`setCount\` to update it
const MyComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default MyComponent;`}
      </code>
      <br />
      <br />
      <h1 className='text-bold text-2xl'>Props:</h1>
      <p  className='text-justify py-4'>
        Props (short for "properties") are immutable inputs passed from a parent component to a child component. They are used to pass data or configuration. Props are passed down from parent to child components. They are read-only for the child. Props are immutable and cannot be modified by the child component. Used to pass data, event handlers, or configuration between components
      </p>
    <code className="bg-[#333] text-white p-4 block whitespace-pre">
{`
// Greeting component: Accepts \`name\` as a prop and displays a personalized message
const Greeting = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1> {/* Displays the greeting message */}
    </div>
  );
};

// App component: Passes the \`name\` prop to the Greeting component
const App = () => {
  const glory = "Shamsudeen"; // Define the \`glory\` variable

  return (
    <div>
      <Greeting name={glory} /> {/* Passes \`glory\` as the value of the \`name\` prop */}
    </div>
  );
};

export default App; // Exports the App component as the default export
`}
</code>

    </div>
  )
}

export default page
