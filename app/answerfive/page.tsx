import React from 'react'

const page = () => {
  return (
    <div className='p-16'>
      <h1 className='text-bold text-2xl'>Context API in React</h1>
      <p className='text-justify py-4'>
        The Context API is a built-in feature in React that allows you to manage global state without having to pass props down manually at every level of the component tree. It provides a way to share values (state, functions, etc.) across components without explicitly passing them through each component's props, making it ideal for managing global or shared state.
      </p>
      <h1 className='text-bold text-2xl'>Why Use Context API?</h1>
      <ul>
        <li><strong>Avoid Prop Drilling:</strong>  Instead of passing props down through several layers of components, you can provide values at a higher level and consume them in any component.
        </li>
        <li>
          <strong>Global State Management:</strong>  Useful for managing state that should be accessible across many components, like user authentication, theme preferences, etc.
        </li>
        <li>
          <strong> Cleaner and More Efficient:</strong> Reduces complexity when managing global state and makes the code more readable.
        </li>
      </ul>
      <h1 className='text-bold text-2xl py-4'>Key Concepts of Context API</h1>
      <ul>
        <li><code className='bg-[#333] p-1 rounded-sm'>React.createContext()</code> : Creates a Context object, which will hold the data to be shared.</li>
        <li><code className='bg-[#333] p-1 rounded-sm'>Context.Provider</code> : A component that provides the state value to its children components..</li>
        <li><code className='bg-[#333] p-1 rounded-sm'>Context.Consumer</code> : A component that consumes the state value provided by the <code className='bg-[#333] p-1 rounded-sm'>Context.Provider</code></li>
      </ul>
      <div className='py-4 '>
        <h1 className='text-bold text-2xl'>Example: Managing Global State with Context API</h1>
        <p className='text-justify py-4'>In this example, we will use the Context API to manage the theme (light/dark mode) globally in a React application.
        </p>
        <p className='font-bold'>1. Create a Context for the Global State jsx copy code</p>
        <div className="overflow-x-auto bg-[#333] text-white p-4 rounded-lg mb-6">

          <code className="whitespace-pre text-sm sm:text-base">

            {`
import React, { createContext, useState } from 'react';

// Create a Context for the theme state
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default theme is light

  // Function to toggle the theme between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    // Provide the theme state and toggle function to the component tree
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

`}
          </code>
        </div>
        <p className='font-bold mt-4'>
          2. Wrap Your Application with the Provider
        </p>
        <p>In your App.js, you will wrap your entire application with the ThemeProvider so that any component can access the theme state.</p>
        <div className="overflow-x-auto bg-[#333] text-white p-4 rounded-lg mb-6">

          <code className="whitespace-pre text-sm sm:text-base">                  {`
import React from 'react';
import { ThemeProvider } from './ThemeContext'; // Import the ThemeProvider
import HomePage from './HomePage'; // Your other components

const App = () => {
  return (
    <ThemeProvider>
      <HomePage /> {/* Now this component and its children can access the theme */}
    </ThemeProvider>
  );
};

export default App;

`}
          </code>
        </div>
        <p className='font-bold mt-4'>3. Consume the Global State in a Component
        </p>
        <p>Now, in any component within the app, you can consume the global theme state by using the useContext hook.</p>
        <div className="overflow-x-auto bg-[#333] text-white p-4 rounded-lg mb-6">

          <code className="whitespace-pre text-sm sm:text-base">                  {`
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext'; // Import the ThemeContext

const HomePage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Access the global theme state

  return (
    <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <h1>Welcome to the {theme} mode!</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default HomePage;

`}
          </code>
        </div>
      </div>
      <div>
        <h1 className='font-bold mt-4'>Explanation</h1>
        <ul>
          <li><strong>ThemeContext:</strong>
            ThemeContext is created using createContext(). It provides a shared state for theme and a function toggleTheme to change the theme.</li>
          <li>
            <strong> ThemeProvider:</strong>
            This component uses ThemeContext.Provider to supply the theme state and toggleTheme function to all its descendants.
          </li>
          <li><strong>HomePage:
          </strong>The HomePage component uses the useContext hook to access the current theme and the function to toggle it. The background color and text color change dynamically based on the current theme.</li>
        </ul>
      </div>
    </div>
  )
}

export default page
