import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>HELLO</h1>
      <p>Please click on the questions below to view their corresponding answers:</p>
      <div>
        <h1>Basic Concepts</h1>
        <ol>
          <li>
            <Link href={"/answerone"}>Explain the difference between state and props in React.
            Provide an example of how each is used.
            </Link>
          </li>
        </ol>
       </div>
    </div>
  );
}
