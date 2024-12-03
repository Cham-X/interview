import React from 'react'

const page = () => {
  return (
    <div className='p-16'>
      <h1 className='text-bold text-3xl'>State:</h1>
      <p className='text-justify py-4'>State is a mutable, local data store managed within a React component, used for dynamic updates.It represents the dynamic data or "state" of the component that can change over time. State is local to the component it is defined in and cannot be directly accessed by child components. State is mutable (can change) and is updated using the setState function (in class components) or useState hook (in functional components). Used for interactivity, dynamic rendering, or any data that needs to change within a component.
      </p>
      <code>
        import React, { "useState" } from 'react'; <br />
  // Declare a state variable `count` and a function `setCount` to update it <br/>
  const [count, setCount] = useState(0);
      </code>
      <br />
      <br />
      <h1 className='text-bold text-3xl'>Props:</h1>
      <p  className='text-justify py-4'>
        Props (short for "properties") are immutable inputs passed from a parent component to a child component. They are used to pass data or configuration. Props are passed down from parent to child components. They are read-only for the child. Props are immutable and cannot be modified by the child component. Used to pass data, event handlers, or configuration between components
      </p>
      <code>
        {"  const Greeting = ({ name }) => {"} <br />
        {" return( <h1>Hello, {name}!</h1> )}"}
        <br />
<br />
       {" const App = () => {"} <br />
 {" return (  <div> <Greeting name={glory} /> </div> )}"}
<br />
  { "export default App;" }
      </code >
    </div>
  )
}

export default page
