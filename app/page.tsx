import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl py-4">HELLO</h1>
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
    </div>
  );
}
