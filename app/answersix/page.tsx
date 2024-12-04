import React from 'react'

const page = () => {
  return (
    <div className='p-16'>
      <h1 className='text-bold text-2xl'>React Portals:</h1>
      <p className='text-justify py-4'>
        React Portals provide a way to render a component's content outside of its parent DOM hierarchy while still retaining React's event handling. This is useful for situations where you need a component to visually or logically exist in a different part of the DOM tree, such as modals, tooltips, or dropdowns.
      </p>
      <h1 className='text-bold text-2xl'>Why Use React Portals?</h1>
      <p>React Portals are particularly helpful when:</p>
      <ul>
        <li>You need to break out of the parent container's overflow, z-index, or positioning constraints.
        </li>
        <li>
          You want to render components like modals or tooltips at the root of the DOM for accessibility and styling flexibility.
        </li>
      </ul>
      <h1 className='text-bold text-2xl py-4'>How React Portals Work:</h1>
      <p>React Portals use the ReactDOM.createPortal() method, which takes two arguments:</p>
      <ul>
        <li>The React children (the component you want to render).</li>
        <li>The DOM node where the component should be rendered.</li>
      </ul>
      <div className='py-4 '>
        <h1 className='text-bold text-2xl'>Example: Modal with React Portals</h1>
        <p className='text-justify py-4'>Here's an example of using React Portals to create a modal:</p>
        <p className='font-bold'>Code Implementation</p>
        <div className="overflow-x-auto bg-[#333] text-white p-4 rounded-lg mb-6">

          <code className="whitespace-pre text-sm sm:text-base">

            {`
import React from 'react';
import ReactDOM from 'react-dom';

// Modal component: Uses React Portal to render outside the root DOM hierarchy
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Don't render anything if the modal is not open

  // Render modal content using a portal
  return ReactDOM.createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'center',
          maxWidth: '400px',
          width: '90%',
        }}
      >
        <h2>Modal Content</h2>
        {children}
        <button
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#007BFF',
            color: '#fff',
            cursor: 'pointer',
          }}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>,
    document.body // Render the modal content outside the root DOM
  );
};

// Main App component
const App = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>React Portals Example</h1>
      <button
        style={{
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          backgroundColor: '#28a745',
          color: '#fff',
          cursor: 'pointer',
        }}
        onClick={() => setIsModalOpen(true)}
      >
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p>This modal is rendered using React Portals!</p>
      </Modal>
    </div>
  );
};

export default App;


`}
          </code>
        </div>
      </div>
      <div>
        <h1 className='font-bold mt-4'>Explanation</h1>
        <ul>
          <li><strong>Modal Component:</strong>
            <ul>
              <li>Accepts isOpen to determine if it should be rendered.</li>
              <li>Uses ReactDOM.createPortal to render the modal outside the root DOM.</li>
            </ul>
          </li>
          <li>
            <strong> App Component:</strong>
            <ul>
              <li>Contains the isModalOpen state to manage the modal's visibility.</li>
              <li>Renders the Modal component and passes a function to close it (onClose).</li>
            </ul>
          </li>
          <li><strong>Portal Rendering:</strong> <br />
            The modal's content is rendered into document.body, ensuring it's not constrained by parent container styles like overflow or z-index.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default page
