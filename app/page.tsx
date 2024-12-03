import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <p className="sm:text-3xl text-2xl font-medium text-white font-generalsans text-center py-4">
                    Hello, I am Shamsudeen <span className="waving-hand">👋</span>
                </p>
      <p>Please click on the questions below to view their corresponding answers:</p>
      <div className="py-4">
        <h1 className="text-2xl">Basic Concepts</h1>
        <ul>
          <li>
        <Link href="/answerone">
  Answer to → Question 1: Explain the difference between state and props in React. Provide an example of how each is used. 
</Link>
          </li>
          <li>
            <Link href={"/answertwo"}>
              Answer to  →  Question 2: What is JSX? Why is it used in React? 
            </Link>
          </li>
        </ul>
      </div>
      <div className="py-4">
        <h1 className="text-2xl"> Intermediate Concepts</h1>
        <ul>
          <li>
            <Link href={"/answerthree"}>
                            Answer to  → Question 3: Create a simple React component that fetches and displays data from an API. Use hooks like useState and useEffect. 
            </Link>
          </li>
          <li>
            <Link href={"/answerfour"}>
                            Answer to  → Question 4: Explain the concept of lifting state up in React. Provide an example where this is necessary. 
            </Link>
          </li>
        </ul>
      </div>
      <div className="py-4">
        <h1 className="text-2xl">  Advanced Concepts</h1>
        <ul>
          <li>
            <Link href={"/answerfive"}>
                            Answer to  → Question 5: Describe the Context API and provide an example of how it can manage the global state in a React application. 
            </Link>
          </li>
          <li>
            <Link href={"/answersix"}>
                            Answer to  → Question 6: Explain the concept of React Portals. Provide an example of a scenario where React Portals would be useful. 
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-2xl">   Practical Task</h1>
        <Link href={"/task"}>
          Task: Build a small React application
        </Link>
      </div>
    </div>
  );
}
